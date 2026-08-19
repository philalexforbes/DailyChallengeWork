const factorial = require('./factorial');

describe('Given an integer return the factorial of that number.', () => {
    test('1. factorial(0) should return 1.', () => {
        expect(factorial(0)).toEqual(1);
    });
    test('2. factorial(5) should return 120.', () => {
        expect(factorial(5)).toEqual(120);
    });
    test('3. factorial(20) should return 2432902008176640000.', () => {
        expect(factorial(20)).toEqual(2432902008176640000);
    });
});