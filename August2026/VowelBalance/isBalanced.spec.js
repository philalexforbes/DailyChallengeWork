const isBalanced = require('./isBalanced');

describe('Return if the number of vowels in the string\'s first half is equal to the string\'s second half.', () => {
    test('1. isBalanced("racecar") should return true.', () => {
        expect(isBalanced("racecar")).toEqual(true);
    });
    test('2. isBalanced("Lorem Ipsum") should return true.', () => {
        expect(isBalanced("Lorem Ipsum")).toEqual(true);
    });
    test('3. isBalanced("Kitty Ipsum") should return false.', () => {
        expect(isBalanced("Kitty Ipsum")).toEqual(false);
    });
    test('4. isBalanced("string") should return false.', () => {
        expect(isBalanced("string")).toEqual(false);
    });
    test('5. isBalanced(" ") should return true.', () => {
        expect(isBalanced(" ")).toEqual(true);
    });
    test('6. isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.', () => {
        expect(isBalanced("abcdefghijklmnopqrstuvwxyz")).toEqual(false);
    });
    test('7. isBalanced("123A#b!E&*456-o.U") should return true.', () => {
        expect(isBalanced("123A#b!E&*456-o.U")).toEqual(true);
    });
});