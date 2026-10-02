const tribonacciSequence = require('./tribonacciSequence');

describe('Given the start of a tribonacci sequence and the length return an array of the numbers.', () => {
    test('1. tribonacciSequence([0, 0, 1], 20) should return [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513].', () => {
        expect(tribonacciSequence([0, 0, 1], 20)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]);
    });
    test('2. tribonacciSequence([21, 32, 43], 1) should return [21].', () => {
        expect(tribonacciSequence([21, 32, 43], 1)).toEqual([21]);
    });
    test('3. tribonacciSequence([0, 0, 1], 0) should return [].', () => {
        expect(tribonacciSequence([0, 0, 1], 0)).toEqual([]);
    });
    test('4. tribonacciSequence([10, 20, 30], 2) should return [10, 20].', () => {
        expect(tribonacciSequence([10, 20, 30], 2)).toEqual([10, 20]);
    });
    test('5. tribonacciSequence([10, 20, 30], 3) should return [10, 20, 30].', () => {
        expect(tribonacciSequence([10, 20, 30], 3)).toEqual([10, 20, 30]);
    });
    test('6. tribonacciSequence([123, 456, 789], 8) should return [123, 456, 789, 1368, 2613, 4770, 8751, 16134].', () => {
        expect(tribonacciSequence([123, 456, 789], 8)).toEqual([123, 456, 789, 1368, 2613, 4770, 8751, 16134]);
    });
});