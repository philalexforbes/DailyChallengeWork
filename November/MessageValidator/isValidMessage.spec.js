const isValidMessage = require('./isValidMessage');

describe('Given a message and a validator of the first letters of the message return if they are the same as a bool.', () => {
    test('1. isValidMessage("hello world", "hw") should return true.', () => {
        expect(isValidMessage("hello world", "hw"))
        .toEqual(true);
    });
    test('2. isValidMessage("ALL CAPITAL LETTERS", "acl") should return true.', () => {
        expect(isValidMessage("ALL CAPITAL LETTERS", "acl"))
        .toEqual(true);
    });
    test('3. isValidMessage("Coding challenge are boring.", "cca") should return false.', () => {
        expect(isValidMessage("Coding challenge are boring.", "cca"))
        .toEqual(false);
    });
    test('4. isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD") should return true.', () => {
        expect(isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD"))
        .toEqual(true);
    });
    test('5. isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") should return false.', () => {
        expect(isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT"))
        .toEqual(false);
    });
}); 