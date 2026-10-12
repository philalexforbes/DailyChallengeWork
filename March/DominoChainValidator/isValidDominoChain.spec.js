const isValidDominoChain = require('./isValidDominoChain');

describe('Given a 2D array of dominos verify if a chain is valid by matching the ending of one domino to the beginning of the next.', () => {
    test('1. isValidDominoChain([[1, 3], [3, 6], [6, 5]]) should return true.', () => {
        expect(isValidDominoChain([[1, 3], [3, 6], [6, 5]])).toEqual(true);
    });
    test('2. isValidDominoChain([[6, 2], [3, 4], [4, 1]]) should return false.', () => {
        expect(isValidDominoChain([[6, 2], [3, 4], [4, 1]])).toEqual(false);
    });
    test('3. isValidDominoChain([[2, 5], [5, 6], [5, 1]]) should return false.', () => {
        expect(isValidDominoChain([[2, 5], [5, 6], [5, 1]])).toEqual(false);
    });
    test('4. isValidDominoChain([[4, 3], [3, 1], [1, 6], [6, 6], [6, 5], [5, 1], [1, 1], [1, 4], [4, 4], [4, 2]]) should return true.', () => {
        expect(isValidDominoChain([[4, 3], [3, 1], [1, 6], [6, 6], [6, 5], [5, 1], [1, 1], [1, 4], [4, 4], [4, 2]])).toEqual(true);
    });
    test('5. isValidDominoChain([[2, 3], [3, 3], [3, 6], [6, 1], [1, 4], [3, 5], [5, 5], [5, 4], [4, 2], [2, 2]]) should return false.', () => {
        expect(isValidDominoChain([[2, 3], [3, 3], [3, 6], [6, 1], [1, 4], [3, 5], [5, 5], [5, 4], [4, 2], [2, 2]])).toEqual(false);
    });
})