const fixNumerals = require('./fixNumerals');

describe('Given a malformed roman numeral return the corrected version.', () => {
    test('1. fixNumerals("XIIIII") should return "XV".', () => {
        expect(fixNumerals("XIIIII")).
        toEqual("XV");
    });
    test('2. fixNumerals("IIIILX") should return "LXIV".', () => {
        expect(fixNumerals("IIIILX")).
        toEqual("LXIV");
    });
    test('3. fixNumerals("XXVVVIIIII") should return "XL".', () => {
        expect(fixNumerals("XXVVVIIIII")).
        toEqual("XL");
    });
    test('4. fixNumerals("MDCCLXXXXVIIII") should return "MDCCXCIX".', () => {
        expect(fixNumerals("MDCCLXXXXVIIII")).
        toEqual("MDCCXCIX");
    });
    test('5. fixNumerals("IIIIVVVVXXXXLLLLCCDD") should return "MCDLXIV".', () => {
        expect(fixNumerals("IIIIVVVVXXXXLLLLCCDD")).
        toEqual("MCDLXIV");
    });
    test('6. fixNumerals("ILCDMIVDIIXLCVCXDL") should return "MMCMLXXXIV".', () => {
        expect(fixNumerals("ILCDMIVDIIXLCVCXDL")).
        toEqual("MMCMLXXXIV");
    });
});