const count = require('./count');

describe('Given a string, return the count for vowels and consonants in as an array.', () => {
    test('1. count("Hello World") should return [3, 7].', () => {
        expect(count("Hello World")).toEqual([3, 7]);
    });
    test('2. count("JavaScript") should return [3, 7].', () => {
        expect(count("JavaScript")).toEqual([3, 7]);
    });
    test('3. count("Python") should return [1, 5].', () => {
        expect(count("Python")).toEqual([1, 5]);
    });
    test('4. count("freeCodeCamp") should return [5, 7].', () => {
        expect(count("freeCodeCamp")).toEqual([5, 7]);
    });
    test('5. count("Hello, World!") should return [3, 7].', () => {
        expect(count("Hello, World!")).toEqual([3, 7]);
    });
    test('6. count("The quick brown fox jumps over the lazy dog.") should return [11, 24].', () => {
        expect(count("The quick brown fox jumps over the lazy dog.")).toEqual([11, 24]);
    });
});