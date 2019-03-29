// by Guillermo Montecinos
// Stereo Assignment, for Sound in Space class, NYU ITP, Spring 2019
// in this sketch I built my own panner

let panX = 0

// Output Gain
const gOut = new Tone.Gain().toMaster()
gOut.gain.value = .3

// Merge
const merge = new Tone.Merge().connect(gOut)

// addition nodes for each channel (L&R)
const addL = new Tone.Add().connect(merge.left)
const addR = new Tone.Add().connect(merge.right)

// Channel (L&R) Gains for noise and silence
const gSilenceL = new Tone.Gain().connect(addL, 0, 0)
const gNoiseL = new Tone.Gain().connect(addL, 0, 1)
const gSilenceR = new Tone.Gain().connect(addR, 0, 0)
const gNoiseR = new Tone.Gain().connect(addR, 0, 1)
// set initial values
gSilenceL.gain.value = Math.sqrt(.5)
gNoiseL.gain.value = Math.sqrt(.5)
gSilenceR.gain.value = Math.sqrt(.5)
gNoiseR.gain.value = Math.sqrt(.5)

// Noise and silence nodes splits
const noiseSplit = new Tone.Split()
noiseSplit.connect(gNoiseL)
noiseSplit.connect(gNoiseR)
const silenceSplit = new Tone.Split()
silenceSplit.connect(gSilenceL)
silenceSplit.connect(gSilenceR)

// Noise and silence gains connected to above splits
const gNoise = new Tone.Gain().connect(noiseSplit)
const gSilence = new Tone.Gain().connect(silenceSplit)
gNoise.gain.value = 1
gSilence.gain.value = 1


// preSplit
const preSplit = new Tone.Split()
preSplit.connect(gNoise, 0, 0)
preSplit.connect(gSilence, 1, 0)

// Noise noiseSource
const noiseSource = new Tone.Noise('white').connect(preSplit).start()

// time issues
let now = Tone.now()

// trigger silence ASR pulse
function gASR(attack, sustain, release){
  const t1 = attack
  const t2 = t1 + sustain
  const t3 = t2 + release
  gSilence.gain.setValueAtTime(1)
  gSilence.gain.linearRampToValueAtTime(0, "+" + t1)
  gSilence.gain.setValueAtTime(0, "+" + t2)
  gSilence.gain.linearRampToValueAtTime(1, "+" + t3)
}

// panning. panX = 0 -> L; panX = 1 -> R
function panning(panX){
  gSilenceL.gain.value = Math.sqrt(1 - panX)/2
  gNoiseL.gain.value = Math.sqrt(panX)/2
  gSilenceR.gain.value = Math.sqrt(panX)/2
  gNoiseR.gain.value = Math.sqrt(1 - panX)/2
}

// notes scheduling
Tone.Transport.schedule(function(time){
  panning(0)
  gASR(.001, .8, .001)
},"1")

Tone.Transport.schedule(function(time){
  panning(.5)
  gASR(.001, .1, .001)
},"2")

Tone.Transport.schedule(function(time){
  panning(1)
  gASR(.001, .1, .001)
},"3")

// transport must be started
Tone.Transport.start()
