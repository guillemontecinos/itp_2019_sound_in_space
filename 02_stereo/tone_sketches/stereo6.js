// by Guillermo Montecinos
// Stereo Assignment, for Sound in Space class, NYU ITP, Spring 2019
// in this sketch I built my own panner

let panX = 0

// Output Gain
const gOut = new Tone.Gain().toMaster()
gOut.gain.value = 0

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
function gASR(attack, duration, release){
  const t1 = attack
  const t2 = duration - attack - release
  const t3 = duration
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

function rampPanning(fromPanX, toPanX, duration){
  gSilenceL.gain.setValueAtTime(Math.sqrt(1 - fromPanX)/2)
  gNoiseL.gain.setValueAtTime(Math.sqrt(fromPanX)/2)
  gSilenceR.gain.setValueAtTime(Math.sqrt(fromPanX)/2)
  gNoiseR.gain.setValueAtTime(Math.sqrt(1 - fromPanX)/2)
  gSilenceL.gain.linearRampToValueAtTime(Math.sqrt(1 - toPanX)/2, "+" + duration)
  gNoiseL.gain.linearRampToValueAtTime(Math.sqrt(toPanX)/2, "+" + duration)
  gSilenceR.gain.linearRampToValueAtTime(Math.sqrt(toPanX)/2, "+" + duration)
  gNoiseR.gain.linearRampToValueAtTime(Math.sqrt(1 - toPanX)/2, "+" + duration)
}

// notes scheduling

Tone.Transport.schedule(function(time){
  gOut.gain.rampTo(.3)
},"+.1")

Tone.Transport.schedule(function(time){
  rampPanning(1, 0, 8.98)
  gASR(.001, 8.98, .001)
},"+1")

Tone.Transport.schedule(function(time){
  rampPanning(0, 1, 10)
  gASR(.001, 10, .001)
},"+10")

Tone.Transport.schedule(function(time){
  panning(1)
  gASR(.001, 1, .001)
},"21")

Tone.Transport.schedule(function(time){
  panning(0)
  gASR(.001, 1, .001)
},"+23")

Tone.Transport.schedule(function(time){
  rampPanning(0, 1, 5)
  gASR(.001, 5, .001)
},"+25")

Tone.Transport.schedule(function(time){
  rampPanning(0, 1, 3.98)
  gASR(.001, 3.98, .001)
},"+31")

Tone.Transport.schedule(function(time){
  rampPanning(1, 0, 2.98)
  gASR(.001, 2.98, .001)
},"+35")

Tone.Transport.schedule(function(time){
  rampPanning(0, 1, 1.98)
  gASR(.001, 1.98, .001)
},"+38")

Tone.Transport.schedule(function(time){
  rampPanning(1, 0, .98)
  gASR(.001, .98, .001)
},"+40")

Tone.Transport.schedule(function(time){
  rampPanning(0, 1, .98)
  gASR(.001, .98, .001)
},"+41")

Tone.Transport.schedule(function(time){
  rampPanning(1, 0, .98)
  gASR(.001, .98, .001)
},"+42")

Tone.Transport.schedule(function(time){
  rampPanning(0, 1, .98)
  gASR(.001, .98, .001)
},"+43")

Tone.Transport.schedule(function(time){
  rampPanning(1, 0, .98)
  gASR(.001, .98, .001)
},"+44")

Tone.Transport.schedule(function(time){
  rampPanning(0, 1, 3.98)
  gASR(.001, 3.98, .001)
},"+45")

Tone.Transport.schedule(function(time){
  panning(1)
  gASR(.001, 1.98, .001)
},"+49")

Tone.Transport.schedule(function(time){
  rampPanning(1, 0, 1.98)
  gASR(.001, 1.98, .001)
},"+51")

Tone.Transport.schedule(function(time){
  rampPanning(0, 1, .98)
  gASR(.001, .98, .001)
},"+53")

Tone.Transport.schedule(function(time){
  rampPanning(1, 0, .98)
  gASR(.001, .98, .001)
},"+54")

Tone.Transport.schedule(function(time){
  rampPanning(0, 1, 1.98)
  gASR(.001, 1.98, .001)
},"+55")

Tone.Transport.schedule(function(time){
  rampPanning(1, 0.5, .98)
  gASR(.001, .98, .001)
},"+57")

Tone.Transport.schedule(function(time){
  panning(0.5)
  gASR(.001, 1.98, .001)
},"+58")

Tone.Transport.schedule(function(time){
  console.log("The End")
  gOut.gain.rampTo(0)
},"+60")

// transport must be started
Tone.Transport.start("+0.1")
