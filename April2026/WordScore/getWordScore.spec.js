const getWordScore = require('./getWordScore');

describe('Given a str return the word score of that string.', () => {
    test('1. getWordScore("hi") should return 17.', () => {
        expect(getWordScore("hi") ).toEqual(17);
    });
    test('2. getWordScore("hello") should return 52.', () => {
        expect(getWordScore("hello")).toEqual(52);
    });
    test('3. getWordScore("hippopotamus") should return 169.', () => {
        expect(getWordScore("hippopotamus")).toEqual(169);
    });
    test('4. getWordScore("freeCodeCamp") should return 94.', () => {
        expect(getWordScore("freeCodeCamp")).toEqual(94);
    });
});