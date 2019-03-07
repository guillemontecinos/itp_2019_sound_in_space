// Commands for performance

//
seqMid.at(0,0)

//
seqMid.at(3,4)

//
seqBass.at(0,0)

//
seqMid.at(2,4)
seqMid.at(3,3)

//
seqMid.at(3,4)
seqMid.at(2,-1)

// randomize 16th notes of poly with prob
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

// randomize 4th notes of mid with prob
for(var i = 0; i < 4; i++){
	let nota = Math.trunc(5*Math.random())
	let prob = Math.random()
	if(prob > .5){
		seqMid.at(i,nota)
	}
	else {
		seqMid.at(i,-1)
	}
}

//
seqBass.at(1,1)

// randomize 16th notes of poly
for(var i = 0; i < 16; i++){
	var nota = Math.trunc(5*Math.random())
	seqPoly.at(i,nota)
}

// must change 5*Math.random() -> 10*Math.random()
highNotes = [146, 186, 230, 280, 310, 292, 372, 460, 560, 610]

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
