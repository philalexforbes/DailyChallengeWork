const spiralMatrix = require('./spiralMatrix');

describe('Given a matrix return the flattened version in clockwise form.', () => {
    test('1. spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [1, 2, 3, 6, 9, 8, 7, 4, 5].', () => {
        expect(spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
        .toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });
    test('2. spiralMatrix([["a", "b", "c", "d"], ["l", "m", "n", "e"], ["k", "p", "o", "f"], ["j", "i", "h", "g"]]) should return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"].', () => {
        expect(spiralMatrix([["a", "b", "c", "d"], ["l", "m", "n", "e"], ["k", "p", "o", "f"], ["j", "i", "h", "g"]]))
        .toEqual(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]);
    });
    test('3. spiralMatrix([[true, false, false], [false, true, true], [false, true, false], [true, true, false]]) should return [true, false, false, true, false, false, true, true, false, false, true, true].', () => {
        expect(spiralMatrix([[true, false, false], [false, true, true], [false, true, false], [true, true, false]]))
        .toEqual([true, false, false, true, false, false, true, true, false, false, true, true]);
    });
    test('4. spiralMatrix([[25, 24, 23, 22, 21], [10, 9, 8, 7, 20], [11, 2, 1, 6, 19], [12, 3, 4, 5, 18], [13, 14, 15, 16, 17]]) should return [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].', () => {
        expect(spiralMatrix([[25, 24, 23, 22, 21], [10, 9, 8, 7, 20], [11, 2, 1, 6, 19], [12, 3, 4, 5, 18], [13, 14, 15, 16, 17]]))
        .toEqual([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
});