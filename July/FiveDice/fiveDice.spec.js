const fiveDice = require('./fiveDice');

describe('Given an array of five dice return the correct best possible hand.', () => {
    test('1. fiveDice([1, 1, 1, 1, 1]) should return "five of a kind".', () => {
        expect(fiveDice([1, 1, 1, 1, 1])).toEqual("five of a kind");
    });
    test('2. fiveDice([5, 5, 5, 6, 5]) should return "four of a kind".', () => {
        expect(fiveDice([5, 5, 5, 6, 5])).toEqual("four of a kind");
    });
    test('3. fiveDice([2, 5, 6, 4, 3]) should return "large straight".', () => {
        expect(fiveDice([2, 5, 6, 4, 3])).toEqual("large straight");
    });
    test('4. fiveDice([4, 3, 3, 3, 1]) should return "three of a kind".', () => {
        expect(fiveDice([4, 3, 3, 3, 1])).toEqual("three of a kind");
    });
    test('5. fiveDice([4, 6, 2, 6, 5]) should return "pair".', () => {
        expect(fiveDice([4, 6, 2, 6, 5])).toEqual("pair");
    });
    test('6. fiveDice([1, 4, 5, 6, 2]) should return "no pair".', () => {
        expect(fiveDice([1, 4, 5, 6, 2])).toEqual("no pair");
    });
    test('7. fiveDice([1, 3, 4, 6, 2]) should return "small straight".', () => {
        expect(fiveDice([1, 3, 4, 6, 2])).toEqual("small straight");
    });
    test('8. fiveDice([2, 2, 5, 2, 5]) should return "full house".', () => {
        expect(fiveDice([2, 2, 5, 2, 5])).toEqual("full house");
    });
    test('9. fiveDice([6, 4, 5, 6, 4]) should return "two pair".', () => {
        expect(fiveDice([6, 4, 5, 6, 4])).toEqual("two pair");
    });
});