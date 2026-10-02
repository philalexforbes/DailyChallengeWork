const tooMuchScreenTime = require('./tooMuchScreenTime');

describe('Given an array of screen time return if the user has too much screen time.', () => {
    test('1. tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]) should return false.', () => {
        expect(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])).toEqual(false);
    });
    test('2. tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) should return false.', () => {
        expect(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) ).toEqual(false);
    });
    test('3. tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]) should return false.', () => {
        expect(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6])).toEqual(false);
    });
    test('4. tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]) should return true.', () => {
        expect(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4])).toEqual(true);
    });
    test('5. tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) should return true.', () => {
        expect(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0])).toEqual(true);
    });
    test('6. tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]) should return true.', () => {
        expect(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])).toEqual(true);
    });
    test('7. tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]) should return true.', () => {
        expect(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6])).toEqual(true);
    });
});