const getLongestSubstring = require('./getLongestSubstring');

describe('Given a string return the longest substring that appears more than once.', () => {
    test('1. getLongestSubstring("abracadabra") should return "abra".', () => {
        expect(getLongestSubstring("abracadabra")).toEqual("abra");
    });
    test('2. getLongestSubstring("hello world hello") should return "hello".', () => {
        expect(getLongestSubstring("hello world hello")).toEqual("hello");
    });
    test('3. getLongestSubstring("mississippi") should return "issi".', () => {
        expect(getLongestSubstring("mississippi")).toEqual("issi");
    });
    test('4. getLongestSubstring("ha ha ha ha ha ha ha") should return "ha ha ha ha ha ha".', () => {
        expect(getLongestSubstring("ha ha ha ha ha ha ha")).toEqual("ha ha ha ha ha ha");
    });
    test('5. getLongestSubstring("the quick brown fox jumped over the lazy dog that the quick brown fox jumped over") should return "the quick brown fox jumped over".', () => {
        expect(getLongestSubstring("the quick brown fox jumped over the lazy dog that the quick brown fox jumped over"))
        .toEqual("the quick brown fox jumped over");
    });
});