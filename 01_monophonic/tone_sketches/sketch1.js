const gainNode = new Tone.Gain().toMaster()
gainNode.gain.value = 1

const synth = new Tone.Synth({
  oscillator  : {
    type  : "triangle"
  }  ,
    envelope  : {
    attack  : 0.5 ,
    decay  : 0.1 ,
    sustain  : 0.3 ,
    release  : 1
  }
}).connect(gainNode)
// synth.triggerAttackRelease(33, "2n")

Tone.Transport.start(0)

const scale = [33, 51, 73, 93, 115, 140, 155]
let notes = [33]

const seq = new Tone.Sequence(function(time, step){
	// console.log(note);
  synth.triggerAttackRelease(notes[step], "5n")
//straight quater notes
}, [0, 1, 2, 3, 4], "5n");

seq.start(0)
