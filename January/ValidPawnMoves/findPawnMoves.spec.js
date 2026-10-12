const findPawnMoves = require('./findPawnMoves');

describe('Determine what possible moves that the pawn can make given their position', () => {
    test('1. findPawnMoves("D4") should return ["D5"].', () => {
        expect(findPawnMoves("D4")).toEqual(["D5"]);
    });
    test('2. findPawnMoves("B2") should return ["B3", "B4"].', () => {
        expect(findPawnMoves("B2")).toEqual(["B3", "B4"]);
    });
    test('3. findPawnMoves("A7") should return ["A8"].', () => {
        expect(findPawnMoves("A7")).toEqual(["A8"]);
    });
    test('4. findPawnMoves("G2") should return ["G3", "G4"].', () => {
        expect(findPawnMoves("G2")).toEqual(["G3", "G4"]);
    });
    test('5. findPawnMoves("E3") should return ["E4"].', () => {
        expect(findPawnMoves("E3")).toEqual(["E4"]);
    });
});