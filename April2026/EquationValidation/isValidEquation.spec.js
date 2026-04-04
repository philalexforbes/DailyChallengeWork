const isValidEquation = require('./isValidEquation');

describe('Given an equation in a string form, evalute if the outcome is correct.', () => {
    test('1. isValidEquation("2 + 2 = 4") should return true.', () => {
        expect(isValidEquation("2 + 2 = 4")).toEqual(true);
    });
    test('2. isValidEquation("2 + 3 - 1 = 4") should return true.', () => {
        expect(isValidEquation("2 + 3 - 1 = 4")).toEqual(true);
    });
    test('3. isValidEquation("8 / 2 = 4") should return true.', () => {
        expect(isValidEquation("8 / 2 = 4")).toEqual(true);
    });
    test('4. isValidEquation("10 * 5 = 50") should return true.', () => {
        expect(isValidEquation("10 * 5 = 50")).toEqual(true);
    });
    test('5. isValidEquation("2 - 2 = 0") should return true.', () => {
        expect(isValidEquation("2 - 2 = 0")).toEqual(true);
    });
    test('6. isValidEquation("2 + 9 / 3 = 5") should return true.', () => {
        expect(isValidEquation("2 + 9 / 3 = 5")).toEqual(true);
    });
    test('7. isValidEquation("20 - 2 * 3 = 14") should return true.', () => {
        expect(isValidEquation("20 - 2 * 3 = 14")).toEqual(true);
    });
    test('8. isValidEquation("2 + 5 = 6") should return false.', () => {
        expect(isValidEquation("2 + 5 = 6")).toEqual(false);
    });
    test('9. isValidEquation("10 - 2 * 3 = 24") should return false.', () => {
        expect(isValidEquation("10 - 2 * 3 = 24")).toEqual(false);
    });
    test('10. isValidEquation("3 + 9 / 3 = 4") should return false.', () => {
        expect(isValidEquation("3 + 9 / 3 = 4")).toEqual(false);
    });
});