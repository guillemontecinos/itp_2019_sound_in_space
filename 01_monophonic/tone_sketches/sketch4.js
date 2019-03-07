// scale and notes arrays for both synths
let bassNotes = [33, 51]
let midNotes  = [73, 93, 115, 140, 155]
let highNotes = [146, 186, 230, 280, 310]

const gainBassNode = new Tone.Gain().toMaster() //to control bass gain
gainBassNode.gain.value = .3

const gainMidNode = new Tone.Gain().toMaster()
gainMidNode.gain.value = .15

const gainPolyNode = new Tone.Gain().toMaster() //to control poly synth gain
gainPolyNode.gain.value = .015

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
}).connect(gainBassNode)

// midnotes
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


// polysynth, plays notes 2-7 of scale
const poly = new Tone.PolySynth(7, Tone.Synth).connect(gainPolyNode)
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
