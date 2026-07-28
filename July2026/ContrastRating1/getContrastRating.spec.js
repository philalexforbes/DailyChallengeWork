const getContrastRating = require('./getContrastRating');

describe('Given a ratio and a boolean indicating large text. Return if it passes WCAG and what rating it deserves.', () => {
    test('1. getContrastRating("7.5", false) should return "AAA".', () =>{
        expect(getContrastRating("7.5", false)).toEqual("AAA");
    });
    test('2. getContrastRating("4.8", false) should return "AA".', () =>{
        expect(getContrastRating("4.8", false)).toEqual("AA");
    });
    test('3. getContrastRating("4.2", false) should return "Fail".', () =>{
        expect(getContrastRating("4.2", false)).toEqual("Fail");
    });
    test('4. getContrastRating("4.5", true) should return "AAA".', () =>{
        expect(getContrastRating("4.5", true)).toEqual("AAA");
    });
    test('5. getContrastRating("3.0", true) should return "AA".', () =>{
        expect(getContrastRating("3.0", true)).toEqual("AA");
    });
    test('6. getContrastRating("2.7", false) should return "Fail".', () =>{
        expect(getContrastRating("2.7", false)).toEqual("Fail");
    });
});