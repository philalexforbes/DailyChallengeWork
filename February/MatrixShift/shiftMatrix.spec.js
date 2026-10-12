const shiftMatrix = require('./shiftMatrix');

describe('Verify that the returned matrix is shifted by the specified number.', () => {
    test('1. shiftMatrix([[1, 2, 3], [4, 5, 6]], 1) should return [[6, 1, 2], [3, 4, 5]].', () => {
        expect(shiftMatrix([[1, 2, 3], [4, 5, 6]], 1)).toEqual([[6, 1, 2], [3, 4, 5]]);
    });
    test('2. shiftMatrix([[1, 2, 3], [4, 5, 6]], -1) should return [[2, 3, 4], [5, 6, 1]].', () => {
        expect(shiftMatrix([[1, 2, 3], [4, 5, 6]], -1)).toEqual([[2, 3, 4], [5, 6, 1]]);
    });
    test('3. shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5) should return [[5, 6, 7], [8, 9, 1], [2, 3, 4]].', () => {
        expect(shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)).toEqual([[5, 6, 7], [8, 9, 1], [2, 3, 4]]);
    });
    test('4. shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], -6) should return [[7, 8, 9], [1, 2, 3], [4, 5, 6]].', () => {
        expect(shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], -6)).toEqual([[7, 8, 9], [1, 2, 3], [4, 5, 6]]);
    });
    test('5. shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 7) should return [[10, 11, 12, 13], [14, 15, 16, 1], [2, 3, 4, 5], [6, 7, 8, 9]].', () => {
        expect(shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 7))
        .toEqual([[10, 11, 12, 13], [14, 15, 16, 1], [2, 3, 4, 5], [6, 7, 8, 9]]);
    });
    test('6. shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], -54) should return [[7, 8, 9, 10], [11, 12, 13, 14], [15, 16, 1, 2], [3, 4, 5, 6]].', () => {
        expect(shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], -54))
        .toEqual([[7, 8, 9, 10], [11, 12, 13, 14], [15, 16, 1, 2], [3, 4, 5, 6]]);
    });
})