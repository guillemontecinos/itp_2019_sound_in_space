// Tone.Transport.bpm = 90

const gainNode = new Tone.Gain().toMaster()
gainNode.gain.value = .3

const synth = new Tone.Synth({
oscillator  : {
  type  : 'triangle'
}  ,
envelope  : {
  attack  : 0.005 ,
  decay  : 0.1 ,
  sustain  : 0.3 ,
  release  : 1 }
}).connect(gainNode)

Tone.Transport.schedule(function(time){
  synth.triggerAttackRelease("C4", "8n")
},"1")
Tone.Transport.schedule(function(time){
  synth.triggerAttackRelease("C4", "8n")
},"2")
Tone.Transport.schedule(function(time){
  synth.triggerAttackRelease("C4", "8n")
},"3")

// transport must be started
Tone.Transport.start()
