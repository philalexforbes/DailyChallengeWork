const getOddWords = require('./getOddWords');

describe('Given a string of words return all odd length words.', () => {
    test('1. getOddWords("This is a super good test") should return "a super".', () => {
        expect(getOddWords("This is a super good test")).toEqual("a super");
    });
    test('2. getOddWords("one two three four") should return "one two three".', () => {
        expect(getOddWords("one two three four")).toEqual("one two three");
    });
    test('3. getOddWords("banana split sundae with rainbow sprinkles on top") should return "split rainbow sprinkles top"', () => {
        expect(getOddWords("banana split sundae with rainbow sprinkles on top")).toEqual("split rainbow sprinkles top");
    });
    test('4. getOddWords("The quick brown fox jumped over the lazy river") should return "The quick brown fox the river".', () => {
        expect(getOddWords("The quick brown fox jumped over the lazy river")).toEqual("The quick brown fox the river");
    });
});