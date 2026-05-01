const isInCrossword = require('./isInCrossword');

describe('Given a letter determine if is in the binary crossword.', () => {
    test('1. isInCrossword("I") should return true.', () => {
        expect(isInCrossword("I")).toEqual(true);
    });
    test('2. isInCrossword("D") should return true.', () => {
        expect(isInCrossword("D")).toEqual(true);
    });
    test('3. isInCrossword("0") should return true.', () => {
        expect(isInCrossword("0")).toEqual(true);
    });
    test('4. isInCrossword("u") should return true.', () => {
        expect(isInCrossword("u")).toEqual(true);
    });
    test('5. isInCrossword("Y") should return false.', () => {
        expect(isInCrossword("Y")).toEqual(false);
    });
    test('6. isInCrossword("p") should return false.', () => {
        expect(isInCrossword("p")).toEqual(false);
    });
    test('7. isInCrossword("1") should return false.', () => {
        expect(isInCrossword("1")).toEqual(false);
    });
    test('8. isInCrossword("Q") should return false.', () => {
        expect(isInCrossword("Q")).toEqual(false);
    });
});