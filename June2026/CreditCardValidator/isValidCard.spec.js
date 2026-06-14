const isValidCard = require('./isValidCard');

describe('Given a number determine if it is a valid credit card or not.', () => {
    test('1. isValidCard("4532015112830366") should return true.', () => {
        expect(isValidCard("4532015112830366")).toEqual(true);
    });
    test('2. isValidCard("5425233430109903") should return true.', () => {
        expect(isValidCard("5425233430109903")).toEqual(true);
    });
    test('3. isValidCard("371449635398431") should return true.', () => {
        expect(isValidCard("371449635398431")).toEqual(true);
    });
    test('4. isValidCard("6011111111111117") should return true.', () => {
        expect(isValidCard("6011111111111117")).toEqual(true);
    });
    test('5. isValidCard("4532015112830367") should return false.', () => {
        expect(isValidCard("4532015112830367")).toEqual(false);
    });
    test('6. isValidCard("1234567890123456") should return false.', () => {
        expect(isValidCard("1234567890123456")).toEqual(false);
    });
    test('7. isValidCard("4532015112830368") should return false.', () => {
        expect(isValidCard("4532015112830368")).toEqual(false);
    });
});