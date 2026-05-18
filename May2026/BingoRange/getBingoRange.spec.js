const getBingoRange = require('./getBingoRange');

describe('Given a bingo letter return thee range of numbers for that bingo letter.', () => {
    test('1. getBingoRange("B") should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].', () => {
        expect(getBingoRange("B")).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });
    test('2. getBingoRange("I") should return [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].', () => {
        expect(getBingoRange("I")).toEqual([16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
    });
    test('3. getBingoRange("N") should return [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]', () => {
        expect(getBingoRange("N")).toEqual([31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);
    });
    test('4. getBingoRange("G") should return [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60].', () => {
        expect(getBingoRange("G")).toEqual([46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]);
    });
    test('5. getBingoRange("O") should return [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75].', () => {
        expect(getBingoRange("O")).toEqual([61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]);
    });
});