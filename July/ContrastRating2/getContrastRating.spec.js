const getContrastRating = require('./getContrastRating');

describe('Given two luminence values divide the smaller by the larger and determine the WCAG rating.', () => {
    test('1. getContrastRating(1.0, 0.0, false) should return "AAA".', () => {
        expect(getContrastRating(1.0, 0.0, false)).toEqual("AAA");
    });
    test('2. getContrastRating(0.9015, 0.1364, false) should return "AA".', () => {
        expect(getContrastRating(0.9015, 0.1364, false)).toEqual("AA");
    });
    test('3. getContrastRating(0.8965, 0.1628, false) should return "Fail".', () => {
        expect(getContrastRating(0.8965, 0.1628, false)).toEqual("Fail");
    });
    test('4. getContrastRating(0.7469, 0.0957, true) should return "AAA".', () => {
        expect(getContrastRating(0.7469, 0.0957, true)).toEqual("AAA");
    });
    test('5. getContrastRating(0.7489, 0.2018, true) should return "AA".', () => {
        expect(getContrastRating(0.7489, 0.2018, true)).toEqual("AA");
    });
    test('6. getContrastRating(0.6571, 0.1974, true) should return "Fail".', () => {
        expect(getContrastRating(0.6571, 0.1974, true)).toEqual("Fail");
    });
});