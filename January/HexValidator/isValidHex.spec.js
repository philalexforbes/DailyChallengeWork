const isValidHex = require('./isValidHex');

describe('Determine if the given string is a valid hex color', () => {
    test('1. isValidHex("#123") should return true.', () => {
        expect(isValidHex("#123")).toEqual(true);
    });
    test('2. isValidHex("#123abc") should return true.', () => {
        expect(isValidHex("#123abc")).toEqual(true);
    });
    test('3. isValidHex("#ABCDEF") should return true.', () => {
        expect(isValidHex("#ABCDEF")).toEqual(true);
    });
    test('4. isValidHex("#0a1B2c") should return true.', () => {
        expect(isValidHex("#0a1B2c")).toEqual(true);
    });
    test('5. isValidHex("#12G") should return false.', () => {
        expect(isValidHex("#12G")).toEqual(false);
    });
    test('6. isValidHex("#1234567") should return false.', () => {
        expect(isValidHex("#1234567")).toEqual(false);
    });
    test('7. isValidHex("#12 3") should return false.', () => {
        expect(isValidHex("#12 3")).toEqual(false);
    });
    test('8. isValidHex("fff") should return false.', () => {
        expect(isValidHex("fff")).toEqual(false);
    });
});