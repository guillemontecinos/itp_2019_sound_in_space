// by Guillermo Montecinos
// Stereo Assignment, for Sound in Space class, NYU ITP, Spring 2019

const noiseGain = .3
const t1 = 1

const gainNode = new Tone.Gain().toMaster() //to control bass gain
gainNode.gain.value = noiseGain

const noiseSource = new Tone.Noise('white').connect(gainNode).start()

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

gainASR(5,.1,.3,.1)
gainASR(6,.1,.3,.1)
gainASR(7,.1,1,.1)
gainASR(8.5,.1,.3,.1)
