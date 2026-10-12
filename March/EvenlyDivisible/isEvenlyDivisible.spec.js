const isEvenlyDivisible = require('./isEvenlyDivisible');

describe('Return true or false if you can evenly divide the first integer by the second one.', () => {
    test('1. isEvenlyDivisible(4, 2) should return true.', () => {
        expect(isEvenlyDivisible(4, 2)).toEqual(true);
    });
    test('2. isEvenlyDivisible(7, 3) should return false.', () => {
        expect(isEvenlyDivisible(7, 3)).toEqual(false);
    });
    test('3. isEvenlyDivisible(5, 10) should return false.', () => {
        expect(isEvenlyDivisible(5, 10)).toEqual(false);
    });
    test('4. isEvenlyDivisible(48, 6) should return true.', () => {
        expect(isEvenlyDivisible(48, 6)).toEqual(true);
    });
    test('5. isEvenlyDivisible(3186, 9) should return true.', () => {
        expect(isEvenlyDivisible(3186, 9)).toEqual(true);
    });
    test('6. isEvenlyDivisible(4192, 11) should return false.', () => {
        expect(isEvenlyDivisible(4192, 11)).toEqual(false);
    });
})