const palindromeLocator = require('./palindromeLocator');

describe('Determine if the string is a palindrome and return the middle character(s) if it is or none if it is not.', () => {
    test('1. palindromeLocator("racecar") should return "e".', () => {
        expect(palindromeLocator("racecar")).toEqual("e");
    });
    test('2. palindromeLocator("level") should return "v".', () => {
        expect(palindromeLocator("level")).toEqual("v");
    });
    test('3. palindromeLocator("freecodecamp") should return "none".', () => {
        expect(palindromeLocator("freecodecamp")).toEqual("none");
    });
    test('4. palindromeLocator("noon") should return "oo".', () => {
        expect(palindromeLocator("noon")).toEqual("oo");
    });
    test('5. palindromeLocator("11100111") should return "00".', () => {
        expect(palindromeLocator("11100111")).toEqual("00");
    });
});