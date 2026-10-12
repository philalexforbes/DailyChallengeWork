const areAnagrams = require('./areAnagrams');

describe('Check if the strings are anagrams of each other.', () => {
    test('1. areAnagrams("listen", "silent") should return true.', () => {
        expect(areAnagrams("listen", "silent")).toEqual(true);
    });
    test('2. areAnagrams("School master", "The classroom") should return true.', () => {
        expect(areAnagrams("School master", "The classroom")).toEqual(true);
    });
    test('3. areAnagrams("A gentleman", "Elegant man") should return true.', () => {
        expect(areAnagrams("A gentleman", "Elegant man")).toEqual(true);
    });
    test('4. areAnagrams("Hello", "World") should return false.', () => {
        expect(areAnagrams("Hello", "World")).toEqual(false);
    });
    test('5. areAnagrams("apple", "banana") should return false.', () => {
        expect(areAnagrams("apple", "banana")).toEqual(false);
    });
    test('6. areAnagrams("cat", "dog") should return false.', () => {
        expect(areAnagrams("cat", "dog")).toEqual(false);
    });
});