const sumOfSquares = require('./sumOfSquares');

describe('Given a positive integer return the sum of all integers up to that number.', () => {
    test('1. sumOfSquares(5) should return 55.', () => {
        expect(sumOfSquares(5)).toEqual(55);
    });
    test('2. sumOfSquares(10) should return 385.', () => {
        expect(sumOfSquares(10)).toEqual(385);
    });
    test('3. sumOfSquares(25) should return 5525.', () => {
        expect(sumOfSquares(25)).toEqual(5525);
    });
    test('4. sumOfSquares(500) should return 41791750.', () => {
        expect(sumOfSquares(500)).toEqual(41791750);
    });
    test('5. sumOfSquares(1000) should return 333833500.', () => {
        expect(sumOfSquares(1000)).toEqual(333833500);
    });
});