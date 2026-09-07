const parseRomanNumeral = require('./parseRomanNumeral');

describe('Given a string of roman numerals return the numeric value.', () => {
    test('1. parseRomanNumeral("III") should return 3.', () => {
        expect(parseRomanNumeral("III")).toEqual(3);
    });
    test('2. parseRomanNumeral("IV") should return 4.', () => {
        expect(parseRomanNumeral("IV")).toEqual(4);
    });
    test('3. parseRomanNumeral("XXVI") should return 26.', () => {
        expect(parseRomanNumeral("XXVI")).toEqual(26);
    });
    test('4. parseRomanNumeral("XCIX") should return 99.', () => {
        expect(parseRomanNumeral("XCIX")).toEqual(99);
    });
    test('5. parseRomanNumeral("CDLX") should return 460.', () => {
        expect(parseRomanNumeral("CDLX")).toEqual(460);
    });
    test('6. parseRomanNumeral("DIV") should return 504.', () => {
        expect(parseRomanNumeral("DIV")).toEqual(504);
    });
    test('7. parseRomanNumeral("MMXXV") should return 2025.', () => {
        expect(parseRomanNumeral("MMXXV")).toEqual(2025);
    });
});