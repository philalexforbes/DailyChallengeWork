const getEmojiPhrase = require('./getEmojiPhrase');

describe('Given a string of emojis return the translation.', () => {
    test('1. getEmojiPhrase("🪨⭐") should return "rock star".', () => {
        expect(getEmojiPhrase("🪨⭐")).toEqual("rock star");
    });
    test('2. getEmojiPhrase("🥵🐕") should return "hot dog".', () => {
        expect(getEmojiPhrase("🥵🐕")).toEqual("hot dog");
    });
    test('3. getEmojiPhrase("👶🦈") should return "baby shark".', () => {
        expect(getEmojiPhrase("👶🦈")).toEqual("baby shark");
    });
    test('4. getEmojiPhrase("⭐🐟") should return "star fish".', () => {
        expect(getEmojiPhrase("⭐🐟")).toEqual("star fish");
    });
    test('5. getEmojiPhrase("🧊🧊👶") should return "ice ice baby".', () => {
        expect(getEmojiPhrase("🧊🧊👶")).toEqual("ice ice baby");
    });
    test('6. getEmojiPhrase("🐱🐟🍲") should return "cat fish soup"', () => {
        expect(getEmojiPhrase("🐱🐟🍲")).toEqual("cat fish soup");
    });
});