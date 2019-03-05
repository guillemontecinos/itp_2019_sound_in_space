const gainBass = new Tone.Gain().toMaster() //to control bass gain
gainBass.gain.value = 1

const gainPoly = new Tone.Gain().toMaster() //to control poly synth gain
gainPoly.gain.value = .8

// bass synth, plays notes 0 & 1 of scale
const bass = new Tone.Synth({
  oscillator  : {
    type  : "triangle"
  }  ,
    envelope  : {
    attack  : 0.3 ,
    decay  : 0.01 ,
    sustain  : 0.6 ,
    release  : .01
  }
}).connect(gainBass)

// polysynth, plays notes 2-7 of scale
const poly = new Tone.PolySynth(7, Tone.Synth).connect(gainPoly)
poly.set({
	"oscillator" : {
		"type" : "triangle"
	}
});

Tone.Transport.bpm.value = 70
Tone.Transport.start(0)

// scale and notes arrays for both synths
const scale = [33, 51, 73, 93, 115, 140, 155] //(freq)
let noteBass = [33, 51]
let notePoly = [93, 115, 140, 155, 186, 230, 280, 310]

// sequencer that plays bass
const seqBass = new Tone.Sequence(function(time, step){
	// console.log("bass")
	if(step >= 0){
		bass.triggerAttackRelease(noteBass[step], "2n")
	}
}, [-1, -1])

// sequencer that plays poly
const seqPoly = new Tone.Sequence(function(time, step){
	// console.log(notePlay);
	if(step >= 0){
		poly.triggerAttackRelease(notePoly[step], "8n")
	}
//straight quater notes
}, [-1, -1, -1, -1, -1, -1, -1, -1], "8n")

seqBass.start(0)
seqPoly.start(0)
