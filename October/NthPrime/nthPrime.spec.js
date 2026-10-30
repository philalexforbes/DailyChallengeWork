const nthPrime = require('./nthPrime');

describe('Given a number return the prime number of that position.', () => {
    test('1. nthPrime(5) should return 11', () => {
        expect(nthPrime(5)).toEqual(11);
    });
    test('2. nthPrime(10) should return 29.', () => {
        expect(nthPrime(10)).toEqual(29);
    });
    test('3. nthPrime(16) should return 53.', () => {
        expect(nthPrime(16)).toEqual(53);
    });
    test('4. nthPrime(99) should return 523.', () => {
        expect(nthPrime(99)).toEqual(523);
    });
    test('5. nthPrime(1000) should return 7919.', () => {
        expect(nthPrime(1000)).toEqual(7919);
    });
});