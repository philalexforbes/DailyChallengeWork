const knightMoves = require('./knightMoves');

describe('Determine the number of moves the knight could make from the given position', () => {
    test('1. knightMoves("A1") should return 2.', () => {
        expect(knightMoves("A1")).toEqual(2);
    });
    test('2. knightMoves("D4") should return 8.', () => {
        expect(knightMoves("D4")).toEqual(8);
    });
    test('3. knightMoves("G6") should return 6.', () => {
        expect(knightMoves("G6")).toEqual(6);
    });
    test('4. knightMoves("B8") should return 3.', () => {
        expect(knightMoves("B8")).toEqual(3);
    });
    test('5. knightMoves("H3") should return 4.', () => {
        expect(knightMoves("H3")).toEqual(4);
    });
});