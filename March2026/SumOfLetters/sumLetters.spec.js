const sumLetters = require('./sumLetters');

describe('When a string is passed through add the letters up to get the correct total.', () => {
    test('1. sumLetters("Hello") should return 52.', () => {
        expect(sumLetters("Hello")).toEqual(52);
    });
    test('2. sumLetters("freeCodeCamp") should return 94.', () => {
        expect(sumLetters("freeCodeCamp")).toEqual(94);
    });
    test('3. sumLetters("The quick brown fox jumps over the lazy dog.") should return 473.', () => {
        expect(sumLetters("The quick brown fox jumps over the lazy dog.")).toEqual(473);
    });
    test('4. sumLetters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.") should return 1681.', () => {
        expect(sumLetters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci."))
        .toEqual(1681);
    });
    test('5. sumLetters("</404>") should return 0.', () => {
        expect(sumLetters("</404>")).toEqual(0);
    });
})