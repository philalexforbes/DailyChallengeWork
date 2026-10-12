const isUnnaturalPrime = require('./isUnnaturalPrime');

describe('Given a number return if the number is an unnatural prime or not.', () => {
    test('1. isUnnaturalPrime(1) should return false.', () => {
        expect(isUnnaturalPrime(1)).toEqual(false);
    });
    test('2. isUnnaturalPrime(-1) should return false.', () => {
        expect(isUnnaturalPrime(-1)).toEqual(false);
    });
    test('3. isUnnaturalPrime(19) should return true.', () => {
        expect(isUnnaturalPrime(19)).toEqual(true);
    });
    test('4. isUnnaturalPrime(-23) should return true.', () => {
        expect(isUnnaturalPrime(-23)).toEqual(true);
    });
    test('5. isUnnaturalPrime(0) should return false.', () => {
        expect(isUnnaturalPrime(0)).toEqual(false);
    });
    test('6. isUnnaturalPrime(97) should return true.', () => {
        expect(isUnnaturalPrime(97)).toEqual(true);
    });
    test('7. isUnnaturalPrime(-61) should return true.', () => {
        expect(isUnnaturalPrime(-61)).toEqual(true);
    });
    test('8. isUnnaturalPrime(99) should return false.', () => {
        expect(isUnnaturalPrime(99)).toEqual(false);
    });
    test('9. isUnnaturalPrime(-44) should return false.', () => {
        expect(isUnnaturalPrime(-44)).toEqual(false);
    });
});