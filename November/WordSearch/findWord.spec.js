const findWord = require('./findWord');

describe('Given a matrix of letters and a word, find the starting letter and ending letter position in the matrix.', () => {
    test('1. findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat") should return [[0, 1], [2, 1]].', () => {
        expect(findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat")).toEqual([[0, 1], [2, 1]]);
    });
    test('2. findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog") should return [[0, 0], [0, 2]].', () => {
        expect(findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog")).toEqual([[0, 0], [0, 2]]);
    });
    test('3. findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish") should return [[3, 3], [0, 3]].', () => {
        expect(findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish")).toEqual([[3, 3], [0, 3]]);
    });
    test('4. findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox") should return [[1, 3], [1, 1]].', () => {
        expect(findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox")).toEqual([[1, 3], [1, 1]]);
    });
});