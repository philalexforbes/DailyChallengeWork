const getContrastRating = require('./getContrastRating');

describe('Given RGB and large text determine if the contrast WCAG rating.', () => {
    test('1. getContrastRating([255, 255, 255], [0, 0, 0], false) should return "AAA".', () => {
        expect(getContrastRating([255, 255, 255], [0, 0, 0], false)).toEqual("AAA");
    });
    test('2. getContrastRating([215, 188, 188], [55, 55, 55], false) should return "AA".', () => {
        expect(getContrastRating([215, 188, 188], [55, 55, 55], false)).toEqual("AA");
    });
    test('3. getContrastRating([143, 144, 210], [46, 47, 61], false) should return "Fail".', () => {
        expect(getContrastRating([143, 144, 210], [46, 47, 61], false)).toEqual("Fail");
    });
    test('4. getContrastRating([167, 167, 210], [53, 10, 53], true) should return "AAA".', () => {
        expect(getContrastRating([167, 167, 210], [53, 10, 53], true)).toEqual("AAA");
    });
    test('5. getContrastRating([135, 147, 155], [60, 70, 90], true) should return "AA".', () => {
        expect(getContrastRating([135, 147, 155], [60, 70, 90], true)).toEqual("AA");
    });
    test('6. getContrastRating([125, 210, 195], [105, 130, 90], true) should return "Fail".', () => {
        expect(getContrastRating([125, 210, 195], [105, 130, 90], true)).toEqual("Fail");
    });
});