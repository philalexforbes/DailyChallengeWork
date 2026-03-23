const hasNoRepeats = require('./hasNoRepeats');

describe('Given a string, determine if it has any repeating characters and return true or false.', () => {
    test('1. hasNoRepeats("hi world") should return true.', () => {
        expect(hasNoRepeats("hi world")).toEqual(true);
    });
    test('2. hasNoRepeats("hello world") should return false.', () => {
        expect(hasNoRepeats("hello world")).toEqual(false);
    });
    test('3. hasNoRepeats("abcdefghijklmnopqrstuvwxyz") should return true.', () => {
        expect(hasNoRepeats("abcdefghijklmnopqrstuvwxyz")).toEqual(true);
    });
    test('4. hasNoRepeats("freeCodeCamp") should return false.', () => {
        expect(hasNoRepeats("freeCodeCamp")).toEqual(false);
    });
    test('5. hasNoRepeats("The quick brown fox jumped over the lazy dog.") should return true.', () => {
        expect(hasNoRepeats("The quick brown fox jumped over the lazy dog.")).toEqual(true);
    });
    test('6. hasNoRepeats("Mississippi") should return false.', () => {
        expect(hasNoRepeats("Mississippi")).toEqual(false);
    });
});