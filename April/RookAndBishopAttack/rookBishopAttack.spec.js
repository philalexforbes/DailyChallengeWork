const rookBishopAttack = require('./rookBishopAttack');

describe('Determine if a a rook or bishop can attack one or the other.', () => {
    test('1. rookBishopAttack("A1", "A5") should return "rook".', () => {
        expect(rookBishopAttack("A1", "A5")).toEqual("rook");
    });
    test('2. rookBishopAttack("C3", "F6") should return "bishop".', () => {
        expect(rookBishopAttack("C3", "F6")).toEqual("bishop");
    });
    test('3. rookBishopAttack("D4", "D7") should return "rook".', () => {
        expect(rookBishopAttack("D4", "D7")).toEqual("rook");
    });
    test('4. rookBishopAttack("B7", "H1") should return "bishop".', () => {
        expect(rookBishopAttack("B7", "H1")).toEqual("bishop");
    });
    test('5. rookBishopAttack("B3", "C5") should return "neither".', () => {
        expect(rookBishopAttack("B3", "C5")).toEqual("neither");
    });
    test('6. rookBishopAttack("G3", "E8") should return "neither".', () => {
        expect(rookBishopAttack("G3", "E8")).toEqual("neither");
    });
})