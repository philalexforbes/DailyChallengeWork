const getNumberWords = require('./getNumberWords');

describe('Given a number return the word version of that number.', () =>{
    test('1. getNumberWords(0) should return "zero".', () => {
        expect(getNumberWords(0)).toEqual("zero");
    });
    test('2. getNumberWords(10) should return "ten".', () => {
        expect(getNumberWords(10)).toEqual("ten");
    });
    test('3. getNumberWords(19) should return "nineteen".', () => {
        expect(getNumberWords(19)).toEqual("nineteen");
    });
    test('4. getNumberWords(30) should return "thirty".', () => {
        expect(getNumberWords(30)).toEqual("thirty");
    });
    test('5. getNumberWords(53) should return "fifty-three".', () => {
        expect(getNumberWords(53)).toEqual("fifty-three");
    });
    test('6. getNumberWords(7) should return "seven".', () => {
        expect(getNumberWords(7)).toEqual("seven");
    });
    test('7. getNumberWords(12) should return "twelve".', () => {
        expect(getNumberWords(12)).toEqual("twelve");
    });
    test('8. getNumberWords(60) should return "sixty".', () => {
        expect(getNumberWords(60)).toEqual("sixty");
    });
    test('9. getNumberWords(67) should return "sixty-seven".', () => {
        expect(getNumberWords(67)).toEqual("sixty-seven");
    });
    test('10. getNumberWords(98) should return "ninety-eight".', () => {
        expect(getNumberWords(98)).toEqual("ninety-eight");
    });
});