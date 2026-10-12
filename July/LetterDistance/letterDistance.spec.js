const letterDistance = require('./letterDistance');

describe('Given two strings return the shortest distance between the letters of the two strings.', () => {
    test('1. letterDistance("abc", "bcd") should return 3.', () => {
        expect(letterDistance("abc", "bcd")).toEqual(3);
    });
    test('2. letterDistance("abc", "xyz") should return 9.', () => {
        expect(letterDistance("abc", "xyz")).toEqual(9);
    });
    test('3. letterDistance("encrypt", "decrypt") should return 10.', () => {
        expect(letterDistance("encrypt", "decrypt")).toEqual(10);
    });
    test('4. letterDistance("algorithm", "codeblock") should return 43.', () => {
        expect(letterDistance("algorithm", "codeblock")).toEqual(43);
    });
    test('5. letterDistance("lobster", "penguin") should return 47.', () => {
        expect(letterDistance("lobster", "penguin")).toEqual(47);
    });
    test('6. letterDistance("alligator", "crocodile") should return 55.', () => {
        expect(letterDistance("alligator", "crocodile")).toEqual(55);
    });
});