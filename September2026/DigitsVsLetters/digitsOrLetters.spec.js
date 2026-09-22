const digitsOrLetters = require('./digitsOrLetters');

describe('Given a string return if the numbers or digits are greater or tie.', () => {
    test('1. digitsOrLetters("abc123") should return "tie".', () => {
        expect(digitsOrLetters("abc123")).toEqual("tie");
    });
    test('2. digitsOrLetters("a1b2c3d") should return "letters".', () => {
        expect(digitsOrLetters("a1b2c3d")).toEqual("letters");
    });
    test('3. digitsOrLetters("1a2b3c4") should return "digits".', () => {
        expect(digitsOrLetters("1a2b3c4")).toEqual("digits");
    });
    test('4. digitsOrLetters("abc123!@#DEF") should return "letters".', () => {
        expect(digitsOrLetters("abc123!@#DEF")).toEqual("letters");
    });
    test('5. digitsOrLetters("H3110 W0R1D") should return "digits".', () => {
        expect(digitsOrLetters("H3110 W0R1D")).toEqual("digits");
    });
    test('6. digitsOrLetters("P455W0RD") should return "tie".', () => {
        expect(digitsOrLetters("P455W0RD")).toEqual("tie");
    });
});