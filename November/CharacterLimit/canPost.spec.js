const canPost = require('./canPost');

describe('Given a message return if it is short, long, or too big.', () => {
    test('1. canPost("Hello world") should return "short post".', () => {
        expect(canPost("Hello world"))
        .toEqual("short post");
    });
    test('2. canPost("This is a longer message but still under eighty characters.") should return "long post".', () => {
        expect(canPost("This is a longer message but still under eighty characters."))
        .toEqual("long post");
    });
    test('3. canPost("This message is too long to fit into either of the character limits for a social media post.") should return "invalid post".', () => {
        expect(canPost("This message is too long to fit into either of the character limits for a social media post."))
        .toEqual("invalid post");
    });
});