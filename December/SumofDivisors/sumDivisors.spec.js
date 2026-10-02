const sumDivisors = require('./sumDivisors');

describe('Get the sum of the divisors for the given integer', () => {
    test('1. sumDivisors(6) should return 12.', () => {
        expect(sumDivisors(6)).toEqual(12);
    });
    test('2. sumDivisors(13) should return 14.', () => {
        expect(sumDivisors(13)).toEqual(14);
    });
    test('3. sumDivisors(28) should return 56.', () => {
        expect(sumDivisors(28)).toEqual(56);
    });
    test('4. sumDivisors(84) should return 224.', () => {
        expect(sumDivisors(84)).toEqual(224);
    });
    test('5. sumDivisors(549) should return 806.', () => {
        expect(sumDivisors(549)).toEqual(806);
    });
    test('6. sumDivisors(9348) should return 23520.', () => {
        expect(sumDivisors(9348)).toEqual(23520);
    });
});