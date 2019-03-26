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
function gASR(startTime, attack, sustain, release){
  const t1 = startTime + attack
  const t2 = t1 + sustain
  const t3 = t2 + release
  gSilence.gain.setValueAtTime(1, "+" + startTime)
  gSilence.gain.linearRampToValueAtTime(0, "+" + t1)
  gSilence.gain.setValueAtTime(0, "+" + t2)
  gSilence.gain.linearRampToValueAtTime(1, "+" + t3)
}

// time schedule
// gASR(5,.1,.3,.1)
// gASR(6,.1,.3,.1)
// gASR(7,.1,1,.1)
// gASR(8.5,.1,.3,.1)

function setup(){
  createCanvas(800,200)
}

function draw(){
  background(200)
  noStroke()
  fill(255)
  ellipse(mouseX, height/2, 50, 50)
  panX = map(mouseX, 0, width, 0, 1)
  if(panX < 0){
    panX = 0
  }
  else if (panX > 1) {
    panX = 1
  }
  // console.log(panX)
  // gLeft.gain.value = noiseGain * Math.sqrt(1 - panX)
  // gRight.gain.value = noiseGain * Math.sqrt(panX)
  // TODO: connect panning to gains
}

function mouseClicked(){
  gASR(0,.1,.3,.1)
}
