//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-11
// Given a string for the location of a rook on a chess board, and another for the location of a bishop, determine if one piece can attack another.
// A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:
// A8 	B8 	C8 	D8 	E8 	F8 	G8 	H8
// A7 	B7 	C7 	D7 	E7 	F7 	G7 	H7
// A6 	B6 	C6 	D6 	E6 	F6 	G6 	H6
// A5 	B5 	C5 	D5 	E5 	F5 	G5 	H5
// A4 	B4 	C4 	D4 	E4 	F4 	G4 	H4
// A3 	B3 	C3 	D3 	E3 	F3 	G3 	H3
// A2 	B2 	C2 	D2 	E2 	F2 	G2 	H2
// A1 	B1 	C1 	D1 	E1 	F1 	G1 	H1
//     Rooks can move as many squares as they want in a horizontal or vertical direction.
//     Bishops can move as many squares as they want in any diagonal direction.
//     One piece can attack another if it can move to the location of that piece.
// Return:
//     "rook" if the rook can attack the bishop.
//     "bishop" if the bishop can attack the rook.
//     "neither" if neither piece can attack one another.

const rookBishopAttack = (rook, bishop) => {
    const boardXCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const boardYCoords = ['1', '2', '3', '4', '5', '6', '7', '8'];
    let bishopPossibleCoords = [];
    const rookCoordinates = `${boardXCoords.indexOf(rook[0])}, ${boardYCoords.indexOf(rook[1])}`;
    const x = boardXCoords.indexOf(bishop[0]);
    const y = boardYCoords.indexOf(bishop[1]);

    //because we don't need to know all possible moves of a bishop given its position at anytime
    //I decided to figure out only the possible moves of the bishop given its current position
    //the below for loops compute these positions moving in all possible directions a bishop can move in
    //bottom left to top right
    for(let i = x, j = y; i < boardXCoords.length && j < boardYCoords.length; i++, j++){
        bishopPossibleCoords.push(`${i}, ${j}`);
    }
    //bottom right to top left
    for(let i = x, j = y; i > 0 && j < boardYCoords.length; i--, j++){
        bishopPossibleCoords.push(`${i}, ${j}`);
    }
    //top left to bottom right
    for(let i = x, j = y; i < boardXCoords.length && j > 0; i++, j--) {
        bishopPossibleCoords.push(`${i}, ${j}`);
    }
    //top right to bottom left
    for(let i = x, j = y; i > 0 && j > 0; i--, j--){
        bishopPossibleCoords.push(`${i}, ${j}`);
    }

    if(rook[0] === bishop[0] || rook[1] === bishop[1]){
        return 'rook';
    }
    else if(bishopPossibleCoords.includes(rookCoordinates)) {
        return 'bishop';
    }
    else {
        return 'neither';
    }
}

module.exports = rookBishopAttack;