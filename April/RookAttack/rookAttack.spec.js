const rookAttack = require('./rookAttack');

describe('Determine if two rooks on a chess board can attack each other.', () => {
    test('1. rookAttack("A1", "A8") should return true.', () => {
        expect(rookAttack("A1", "A8")).toEqual(true);
    });
    test('2. rookAttack("B4", "F4") should return true.', () => {
        expect(rookAttack("B4", "F4")).toEqual(true);
    });
    test('3. rookAttack("E3", "D4") should return false.', () => {
        expect(rookAttack("E3", "D4")).toEqual(false);
    });
    test('4. rookAttack("H7", "F6") should return false.', () => {
        expect(rookAttack("H7", "F6")).toEqual(false);
    });
});