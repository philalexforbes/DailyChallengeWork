const solveMagicSquare = require('./solveMagicSquare');

describe('Given a magic square with a missing number determine the missing number if possible.', () => {
    test('1. solveMagicSquare([[2, 7, 6], [9, 0, 1], [4, 3, 8]]) should return 5.', () => {
        expect(solveMagicSquare([[2, 7, 6], [9, 0, 1], [4, 3, 8]])).toEqual(5);
    });
    test('2. solveMagicSquare([[0, 14, 12], [18, 10, 2], [8, 6, 16]]) should return 4.', () => {
        expect(solveMagicSquare([[0, 14, 12], [18, 10, 2], [8, 6, 16]])).toEqual(4);
    });
    test('Waiting: 3. solveMagicSquare([[12, 17, 16], [19, 0, 10], [14, 13, 18]]) should return "impossible".', () => {
        expect(solveMagicSquare([[12, 17, 16], [19, 0, 10], [14, 13, 18]])).toEqual("impossible");
    });
    test('4. solveMagicSquare([[15, 35, 31], [43, 27, 11], [23, 19, 0]]) should return 39.', () => {
        expect(solveMagicSquare([[15, 35, 31], [43, 27, 11], [23, 19, 0]])).toEqual(39);
    });
    test('5. solveMagicSquare([[26, 41, 14], [47, 35, 0], [32, 29, 44]]) should return "impossible".', () => {
        expect(solveMagicSquare([[26, 41, 14], [47, 35, 0], [32, 29, 44]])).toEqual("impossible");
    });
});