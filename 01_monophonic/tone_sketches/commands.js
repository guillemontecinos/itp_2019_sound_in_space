// Commands for performance

//
seqMid.at(0,0)

//
seqBass.at(0,0)

//
seqMid.at(3,4)

//
seqMid.at(2,4)
seqMid.at(3,3)

//
seqMid.at(3,4)
seqMid.at(2,-1)

// randomize 16th notes of poly woth prob
for(var i = 0; i < 16; i++){
	let nota = Math.trunc(5*Math.random())
	let prob = Math.random()
	if(prob > .5){
		seqPoly.at(i,nota)
	}
	else {
		seqPoly.at(i,-1)
	}
}

//
seqBass.at(1,1)

// randomize 16th notes of poly
for(var i = 0; i < 16; i++){
	var nota = Math.trunc(5*Math.random())
	seqPoly.at(i,nota)
}

// =======================
// TURN OFF ALL SEQUENCERS
// =======================

// turn off notes of bass
for(var i = 0; i < 2; i++){
	seqBass.at(i,-1)
}

// turn off notes of mid
for(var i = 0; i < 4; i++){
	seqMid.at(i,-1)
}

// turn off notes of poly
for(var i = 0; i < 16; i++){
	seqPoly.at(i,-1)
}

// stop sequencers
seqBass.stop()
seqPoly.stop()
