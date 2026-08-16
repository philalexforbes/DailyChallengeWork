const jbelmu = require('./jbelmu');

describe('Given a string return a jumbled version of the string where each word is transformed.', () => {
    test('1. jbelmu("hello world") should return "hello wlord".', () => {
        expect(jbelmu("hello world"))
        .toEqual("hello wlord");
    });
    test('2. jbelmu("i love jumbled text") should return "i love jbelmud text".', () => {
        expect(jbelmu("i love jumbled text"))
        .toEqual("i love jbelmud text");
    });
    test('3. jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe".', () => {
        expect(jbelmu("freecodecamp is my favorite place to learn to code"))
        .toEqual("faccdeeemorp is my faiortve pacle to laern to cdoe");
    });
    test('4. jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog".', () => {
        expect(jbelmu("the quick brown fox jumps over the lazy dog"))
        .toEqual("the qciuk borwn fox jmpus oevr the lazy dog");
    });
});