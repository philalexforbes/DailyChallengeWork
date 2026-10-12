const zipStrings = require('./zipStrings');

describe('Given two strings interweave the strings to form a new string.', () => {
    test('1. zipStrings("abc", "123") should return "a1b2c3".', () => {
        expect(zipStrings("abc", "123")).toEqual("a1b2c3");
    });
    test('2. zipStrings("acegikmoqsuwy", "bdfhjlnprtvxz") should return "abcdefghijklmnopqrstuvwxyz".', () => {
        expect(zipStrings("acegikmoqsuwy", "bdfhjlnprtvxz")).toEqual("abcdefghijklmnopqrstuvwxyz");
    });
    test('3. zipStrings("day", "night") should return "dnaiyght".', () => {
        expect(zipStrings("day", "night")).toEqual("dnaiyght");
    });
    test('4. zipStrings("python", "javascript") should return "pjyatvhaosncript".', () => {
        expect(zipStrings("python", "javascript")).toEqual("pjyatvhaosncript");
    });
    test('5. zipStrings("feCdCm", "reoeap") should return "freeCodeCamp".', () => {
        expect(zipStrings("feCdCm", "reoeap")).toEqual("freeCodeCamp");
    });
});