// by Guillermo Montecinos
// Monophonic Assignment, for Sound in Space class, NYU ITP, Spring 2019

// scale and notes arrays for both synths
let bassNotes = [33, 51]
let midNotes  = [73, 93, 115, 140, 155]
let highNotes = [146, 186, 230, 280, 310]

const gainBassNode = new Tone.Gain().toMaster() //to control bass gain
gainBassNode.gain.value = .3

const gainMidNode = new Tone.Gain().toMaster()
gainMidNode.gain.value = .15

const gainPolyNode = new Tone.Gain().toMaster() //to control poly synth gain
gainPolyNode.gain.value = .06

// bass synth
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
}).connect(gainBassNode)

// mid wynth plays mid-range notes
const mid = new Tone.Synth({
  oscillator  : {
    type  : "sine"
  }  ,
    envelope  : {
    attack  : 0.3 ,
    decay  : 0.01 ,
    sustain  : 0.6 ,
    release  : .01
  }
}).connect(gainMidNode)


// polysynth plays high-range notes
// poly -> eqPoly -> convolver
// impulse response borrowed from Yotam's lib
const convolver = new Tone.Convolver("./matrix-reverb1.wav").connect(gainPolyNode)

const eqPoly = new Tone.EQ3(0,1,-2).connect(convolver)

const poly = new Tone.PolySynth(7, Tone.Synth).connect(eqPoly)
poly.set({
	"oscillator" : {
		"type" : "sawtooth"
	},
  envelope  : {
    attack  : 0.01 ,
    decay  : 0.01 ,
    sustain  : 0.7 ,
    release  : 1
  }
});


Tone.Transport.bpm.value = 70
Tone.Transport.start(0)

// sequencer that triggers bass
const seqBass = new Tone.Sequence(function(time, step){
	if(step >= 0){
		bass.triggerAttackRelease(bassNotes[step], "2n")
	}
//straight quater notes
}, [-1, -1], "2n")

// sequencer that triggers mid
const seqMid = new Tone.Sequence(function(time, step){
	if(step >= 0){
		mid.triggerAttackRelease(midNotes[step], "4n")
	}
//straight quater notes
}, [-1, -1, -1, -1], "4n")

// sequencer that triggers poly
const seqPoly = new Tone.Sequence(function(time, step){
	if(step >= 0){
		poly.triggerAttackRelease(highNotes[step], "16n")
	}
//straight quater notes
}, [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], "16n")

seqBass.start(0)
seqPoly.start(0)
seqMid.start(0)
