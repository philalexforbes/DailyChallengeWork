const isCircularPrime = require('./isCircularPrime');

describe('Verify if the number fed in and all digit rotations are prime numbers', () => {
    test('1. isCircularPrime(197) should return true.', () => {
        expect(isCircularPrime(197)).toEqual(true);
    });
    test('2. isCircularPrime(23) should return false.', () => {
        expect(isCircularPrime(23)).toEqual(false);
    });
    test('3. isCircularPrime(13) should return true.', () => {
        expect(isCircularPrime(13)).toEqual(true);
    });
    test('4. isCircularPrime(89) should return false.', () => {
        expect(isCircularPrime(89)).toEqual(false);
    });
    test('5. isCircularPrime(1193) should return true.', () => {
        expect(isCircularPrime(1193)).toEqual(true);
    });
});