//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-17
// Given the position of a knight on a chessboard, return the number of valid squares the knight can move to.
// A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:
// A8 	B8 	C8 	D8 	E8 	F8 	G8 	H8
// A7 	B7 	C7 	D7 	E7 	F7 	G7 	H7
// A6 	B6 	C6 	D6 	E6 	F6 	G6 	H6
// A5 	B5 	C5 	D5 	E5 	F5 	G5 	H5
// A4 	B4 	C4 	D4 	E4 	F4 	G4 	H4
// A3 	B3 	C3 	D3 	E3 	F3 	G3 	H3
// A2 	B2 	C2 	D2 	E2 	F2 	G2 	H2
// A1 	B1 	C1 	D1 	E1 	F1 	G1 	H1
// A knight moves in an "L" shape: two squares in one direction (horizontal or vertical), and one square in the perpendicular direction.
// This means a knight can move to up to eight possible positions, but fewer when near the edges of the board. For example, if a knight was at A1, it could only move to B3 or C2.

function knightMoves(position) {
    const possibleNumberOfMoves = {
        A1: 2,
        A2: 3,
        A3: 4,
        A4: 4,
        A5: 4,
        A6: 4,
        A7: 3,
        A8: 2,
        B1: 3,
        B2: 4,
        B3: 6,
        B4: 6,
        B5: 6,
        B6: 6,
        B7: 4,
        B8: 3,
        C1: 4,
        C2: 6,
        C3: 8,
        C4: 8,
        C5: 8,
        C6: 8,
        C7: 6,
        C8: 4,
        D1: 4,
        D2: 6,
        D3: 8,
        D4: 8,
        D5: 8,
        D6: 8,
        D7: 6,
        D8: 4,
        E1: 4,
        E2: 6,
        E3: 8,
        E4: 8,
        E5: 8,
        E6: 8,
        E7: 6,
        E8: 4,
        F1: 4,
        F2: 6,
        F3: 8,
        F4: 8,
        F5: 8,
        F6: 8,
        F7: 6,
        F8: 4,
        G1: 3,
        G2: 4,
        G3: 6,
        G4: 6,
        G5: 6,
        G6: 6,
        G7: 4,
        G8: 3,
        H1: 2,
        H2: 3,
        H3: 4,
        H4: 4,
        H5: 4,
        H6: 4,
        H7: 3,
        H8: 2,
    }
    return possibleNumberOfMoves[position];
}

module.exports = knightMoves;