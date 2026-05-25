const guessNumber = require('./guessNumber');

describe('Given a guess number and the actual number determine if the guess is high, low, or spot on.', () => {
    test('1. guessNumber(50, 30) should return "higher".', () => {
        expect(guessNumber(50, 30)).toEqual("higher");
    });
    test('2. guessNumber(85, 99) should return "lower".', () => {
        expect(guessNumber(85, 99)).toEqual("lower");
    });
    test('3. guessNumber(2026, 2026) should return "you got it!".', () => {
        expect(guessNumber(2026, 2026)).toEqual("you got it!");
    });
    test('4. guessNumber(92904, 11283) should return "higher".', () => {
        expect(guessNumber(92904, 11283)).toEqual("higher");
    });
    test('5. guessNumber(230495, 423920) should return "lower".', () => {
        expect(guessNumber(230495, 423920)).toEqual("lower");
    });
    test('6. guessNumber(120349, 120349) should return "you got it!".', () => {
        expect(guessNumber(120349, 120349)).toEqual("you got it!");
    });
});