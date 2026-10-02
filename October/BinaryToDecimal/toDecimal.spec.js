const toDecimal = require('./toDecimal');

describe('Given a binary string return the number representation.', () => {
    test('1. toDecimal("101") should return 5.', () => {
        expect(toDecimal("101")).toEqual(5);
    });
    test('2. toDecimal("1010") should return 10.', () => {
        expect(toDecimal("1010")).toEqual(10);
    });
    test('3. toDecimal("10010") should return 18.', () => {
        expect(toDecimal("10010")).toEqual(18);
    });
    test('4. toDecimal("1010101") should return 85.', () => {
        expect(toDecimal("1010101")).toEqual(85);
    });
});