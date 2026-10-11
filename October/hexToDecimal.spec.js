const hexToDecimal = require('./hexToDecimal');

describe('Given a hexadecimal string return the decimal form.', () => {
    test('1. hexToDecimal("A") should return 10.', () => {
        expect(hexToDecimal("A")).toEqual(10);
    });
    test('2. hexToDecimal("15") should return 21.', () => {
        expect(hexToDecimal("15")).toEqual(21);
    });
    test('3. hexToDecimal("2E") should return 46.', () => {
        expect(hexToDecimal("2E")).toEqual(46);
    });
    test('4. hexToDecimal("FF") should return 255.', () => {
        expect(hexToDecimal("FF")).toEqual(255);
    });
    test('5. hexToDecimal("A3F") should return 2623.', () => {
        expect(hexToDecimal("A3F")).toEqual(2623);
    });
});