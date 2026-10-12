//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-15
// Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.
// In chess, you start with 16 pieces:
// Piece 	Abbreviation 	Quantity 	Value
// Pawn 	"P" 	8 	1
// Rook 	"R" 	2 	5
// Knight 	"N" 	2 	3
// Bishop 	"B" 	2 	3
// Queen 	"Q" 	1 	9
// King 	"K" 	1 	0
//     The given array will only contain the abbreviations above.
//     Any of the 16 pieces not included in the given array have been captured.
//     Return the total value of all captured pieces, unless...
//     If the King has been captured, return "Checkmate".

const getCapturedValue = (pieces) => {
    const pieceValues = {
        P: 1,
        R: 5,
        N: 3,
        B: 3,
        Q: 9,
        K: 0,
    }

    const pieceCounts = {
        P: 8,
        R: 2,
        N: 2,
        B: 2,
        Q: 1,
        K: 1,
    }
    let pawnCount = 0, rookCount = 0, knightCount = 0, bishopCount = 0, queenCount = 0, kingCount = 0;
    for(let i = 0; i < pieces.length; i++) {
        pawnCount = pieces[i] === 'P' ? pawnCount + 1 : pawnCount;
        rookCount = pieces[i] === 'R' ? rookCount + 1 : rookCount;
        knightCount =  pieces[i] === 'N' ? knightCount + 1 : knightCount;
        bishopCount = pieces[i] === 'B' ? bishopCount + 1 : bishopCount;
        queenCount = pieces[i] === 'Q' ? queenCount + 1 : queenCount;
        kingCount = pieces[i] === 'K' ? kingCount + 1 : kingCount;
    }
    let valueOfCapturedPawns = (pieceCounts['P'] - pawnCount) * pieceValues['P'];
    let valueOfCapturedRooks = (pieceCounts['R'] - rookCount) * pieceValues['R']; 
    let valueOfCapturedKnights = (pieceCounts['N'] - knightCount) * pieceValues['N']; 
    let valueOfCapturedBishop = (pieceCounts["B"] - bishopCount) * pieceValues['B'];
    let valueOfCapturedQueens = (pieceCounts['Q'] - queenCount) * pieceValues['Q'];
    if(kingCount === 0) {
        return "Checkmate";
    }
    else {
        return valueOfCapturedPawns + valueOfCapturedRooks + valueOfCapturedKnights + valueOfCapturedBishop + valueOfCapturedQueens;
    }
}

module.exports = getCapturedValue;