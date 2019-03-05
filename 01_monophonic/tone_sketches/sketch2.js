const gainNode = new Tone.Gain().toMaster()
gainNode.gain.value = 1

const poly = new Tone.PolySynth(7, Tone.Synth).connect(gainNode)
poly.set({
	"oscillator" : {
		"type" : "triangle"
	}
});
// poly.triggerAttackRelease(["C4", "E4", "A4"], "4n");

Tone.Transport.start(0)

const scale = [33, 51, 73, 93, 115, 140, 155]

const seq1 = new Tone.Sequence(function(time, step){
	console.log(scale[step+3]);
  poly.triggerAttackRelease(scale[step+3], "4n")
//straight quater notes
}, [0, 1, 2, 3], "4n")

const seq2 = new Tone.Sequence(function(time, step){
	console.log("bass")
	poly.triggerAttackRelease(scale[0], "3n")
}, [0], "1n")

seq1.start(0)
seq2.start(0)
