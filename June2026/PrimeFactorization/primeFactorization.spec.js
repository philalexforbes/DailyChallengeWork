const primeFactorization = require('./primeFactorization');

describe('Given a number return a set of prime number that mutliply to produce that number.', () => {
    test('1. primeFactorization(20) should return [2, 2, 5].', () => {
        expect(primeFactorization(20)).toEqual([2, 2, 5]);
    });
    test('2. primeFactorization(17) should return [17].', () => {
        expect(primeFactorization(17)).toEqual([17]);
    });
    test('3. primeFactorization(15) should return [3, 5].', () => {
        expect(primeFactorization(15)).toEqual([3, 5]);
    });
    test('4. primeFactorization(35) should return [5, 7].', () => {
        expect(primeFactorization(35)).toEqual([5, 7]);
    });
    test('5. primeFactorization(999) should return [3, 3, 3, 37].', () => {
        expect(primeFactorization(999)).toEqual([3, 3, 3, 37]);
    });
    test('6. primeFactorization(360) should return [2, 2, 2, 3, 3, 5].', () => {
        expect(primeFactorization(360)).toEqual([2, 2, 2, 3, 3, 5]);
    });
    test('7. primeFactorization(510510) should return [2, 3, 5, 7, 11, 13, 17].', () => {
        expect(primeFactorization(510510)).toEqual([2, 3, 5, 7, 11, 13, 17]);
    });
});