const pigLatin = require('./pigLatin');

describe('Given a string return the pig latin version of that string.', () => {
    test('1. pigLatin("universe") should return "universeway".', () => {
        expect(pigLatin("universe"))
            .toEqual("universeway");
    });
    test('2. pigLatin("hello") should return "ellohay".', () => {
        expect(pigLatin("hello"))
            .toEqual("ellohay");
    });
    test('3. pigLatin("hello universe") should return "ellohay universeway".', () => {
        expect(pigLatin("hello universe"))
            .toEqual("ellohay universeway");
    });
    test('4. pigLatin("Hello universe") should return "Ellohay universeway"', () => {
        expect(pigLatin("Hello universe"))
            .toEqual("Ellohay universeway");
    });
    test('5. pigLatin("Pig Latin is fun") should return "Igpay Atinlay isway unfay".', () => {
        expect(pigLatin("Pig Latin is fun"))
            .toEqual("Igpay Atinlay isway unfay");
    });
    test('6. pigLatin("The quick brown fox jumped over the lazy dog") should return "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday".', () => {
        expect(pigLatin("The quick brown fox jumped over the lazy dog"))
            .toEqual("Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday");
    });
});