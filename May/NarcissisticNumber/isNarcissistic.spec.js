const isNarcissistic = require('./isNarcissistic');

describe('Given a number return if the sum of each individual number to the power of the length of the original number equals the number.', () => {
    test('1. isNarcissistic(153) should return true.', () => {
        expect(isNarcissistic(153)).toEqual(true);
    });
    test('2. isNarcissistic(154) should return false.', () => {
        expect(isNarcissistic(154)).toEqual(false);
    });
    test('3. isNarcissistic(371) should return true.', () => {
        expect(isNarcissistic(371)).toEqual(true);
    });
    test('4. isNarcissistic(512) should return false.', () => {
        expect(isNarcissistic(512)).toEqual(false);
    });
    test('5. isNarcissistic(9) should return true.', () => {
        expect(isNarcissistic(9)).toEqual(true);
    });
    test('6. isNarcissistic(11) should return false.', () => {
        expect(isNarcissistic(11)).toEqual(false);
    });
    test('7. isNarcissistic(9474) should return true.', () => {
        expect(isNarcissistic(9474)).toEqual(true);
    });
    test('8. isNarcissistic(6549) should return false.', () => {
        expect(isNarcissistic(6549)).toEqual(false);
    });
});