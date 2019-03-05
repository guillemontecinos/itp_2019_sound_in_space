// Commands for performance

// stop sequencers
seqBass.stop()
seqPoly.stop()


// randomize 8-8th notes of poly
for(var i = 0; i < 8; i++){
	var nota = Math.trunc(8*Math.random())
	seqPoly.at(i,nota)
    console.log(nota)
}
