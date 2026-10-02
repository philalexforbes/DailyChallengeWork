const getLongestWord = require('./getLongestWord');

describe('Given a sentence return the longest word.', () => {
    test('1. getLongestWord("coding is fun") should return "coding".', () => {
        expect(getLongestWord("coding is fun")).toEqual("coding");
    });
    test('2. getLongestWord("Coding challenges are fun and educational.") should return "educational".', () => {
        expect(getLongestWord("Coding challenges are fun and educational.")).toEqual("educational");
    });
    test('3. getLongestWord("This sentence has multiple long words.") should return "sentence".', () => {
        expect(getLongestWord("This sentence has multiple long words.")).toEqual("sentence");
    });
});