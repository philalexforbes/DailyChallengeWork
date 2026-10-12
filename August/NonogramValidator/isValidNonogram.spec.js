const isValidNonogram = require('./isValidNonogram');

describe('Given the nonogram clue and the cells filled in. Determine if the nonogram is valid.', () => {
    test('1. isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1]) should return true.', () => {
        expect(isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1])).toEqual(true);
    });
    test('2. isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1]) should return false.', () => {
        expect(isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1])).toEqual(false);
    });
    test('3. isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1]) should return false.', () => {
        expect(isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1])).toEqual(false);
    });
    test('4. isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]) should return true.', () => {
        expect(isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0])).toEqual(true);
    });
    test('5. isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]) should return true.', () => {
        expect(isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0])).toEqual(true);
    });
    test('6. isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) should return false.', () => {
        expect(isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0])).toEqual(false);
    });
});