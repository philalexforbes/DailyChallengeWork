const isPangram = require('./isPangram');

describe('Return if the sentence contains all given words.', () => {
    test('1. isPangram("hello", "helo") should return true' , () => {
        expect(isPangram("hello", "helo"))
        .toEqual(true);
    });
    test('2. isPangram("hello", "hel") should return false' , () => {
        expect(isPangram("hello", "hel"))
        .toEqual(false);
    });
    test('3. isPangram("hello", "helow") should return false' , () => {
        expect(isPangram("hello", "helow"))
        .toEqual(false);
    });
    test('4. isPangram("hello world", "helowrd") should return true' , () => {
        expect(isPangram("hello world", "helowrd"))
        .toEqual(true);
    });
    test('5. isPangram("Hello World!", "helowrd") should return true' , () => {
        expect(isPangram("Hello World!", "helowrd"))
        .toEqual(true);
    });
    test('6. isPangram("Hello World!", "heliowrd") should return false' , () => {
        expect(isPangram("Hello World!", "heliowrd"))
        .toEqual(false);
    });
    test('7. isPangram("freeCodeCamp", "frcdmp") should return false' , () => {
        expect(isPangram("freeCodeCamp", "frcdmp"))
        .toEqual(false);
    });
    test('8. isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return true' , () => {
        expect(isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"))
        .toEqual(true);
    });
});