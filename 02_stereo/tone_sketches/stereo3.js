// by Guillermo Montecinos
// Stereo Assignment, for Sound in Space class, NYU ITP, Spring 2019
// in this sketch I built my own panner

const noiseGain = .3
let panX = 0

// Merge
const merge = new Tone.Merge().toMaster()

// Gain
const gLeft = new Tone.Gain().connect(merge.left)
const gRight = new Tone.Gain().connect(merge.right)

// split
const split = new Tone.Split()
split.connect(gLeft, 0, 0)
split.connect(gRight, 1, 0)

// Noise noiseSource
const noiseSource = new Tone.Noise('white').connect(split).start()

let now = Tone.now()

// trigger silence ASR pulse
function gainASR(startTime, attack, sustain, release){
  const t1 = startTime + attack
  const t2 = t1 + sustain
  const t3 = t2 + release
  gainNode.gain.setValueAtTime(noiseGain, "+" + startTime)
  gainNode.gain.linearRampToValueAtTime(0, "+" + t1)
  gainNode.gain.setValueAtTime(0, "+" + t2)
  gainNode.gain.linearRampToValueAtTime(noiseGain, "+" + t3)
}

// time schedule
// gainASR(5,.1,.3,.1)
// gainASR(6,.1,.3,.1)
// gainASR(7,.1,1,.1)
// gainASR(8.5,.1,.3,.1)

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
  gLeft.gain.value = noiseGain * Math.sqrt(1 - panX)
  gRight.gain.value = noiseGain * Math.sqrt(panX)
}
