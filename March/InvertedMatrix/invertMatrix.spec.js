const invertMatrix = require('./invertMatrix');

describe('Given a matrix with arrays filled with two distinct values. Verify that the returned matrix has the inverse of each value.', () => {
    test('1. invertMatrix([["a", "b"], ["a", "a"]]) should return [["b", "a"], ["b", "b"]].', () => {
        expect(invertMatrix([["a", "b"], ["a", "a"]])).toEqual([["b", "a"], ["b", "b"]]);
    });
    test('2. invertMatrix([[1, 0, 1], [1, 1, 1], [0, 1, 0]]) should return [[0, 1, 0], [0, 0, 0], [1, 0, 1]].', () => {
        expect(invertMatrix([[1, 0, 1], [1, 1, 1], [0, 1, 0]])).toEqual([[0, 1, 0], [0, 0, 0], [1, 0, 1]]);
    });
    test('3. invertMatrix([["apple", "banana", "banana", "apple"], ["banana", "apple", "apple", "banana"], ["banana", "banana", "banana", "apple"]]) should return [["banana", "apple", "apple", "banana"], ["apple", "banana", "banana", "apple"], ["apple", "apple", "apple", "banana"]].', () => {
        expect(invertMatrix([["apple", "banana", "banana", "apple"], ["banana", "apple", "apple", "banana"], ["banana", "banana", "banana", "apple"]]))
        .toEqual([["banana", "apple", "apple", "banana"], ["apple", "banana", "banana", "apple"], ["apple", "apple", "apple", "banana"]]);
    });
    test('4. invertMatrix([[6, 7, 7, 7, 6], [7, 6, 7, 6, 7], [7, 7, 6, 7, 7], [7, 6, 7, 6, 7], [6, 7, 7, 7, 6]]) should return [[7, 6, 6, 6, 7], [6, 7, 6, 7, 6], [6, 6, 7, 6, 6], [6, 7, 6, 7, 6], [7, 6, 6, 6, 7]].', () => {
        expect(invertMatrix([[6, 7, 7, 7, 6], [7, 6, 7, 6, 7], [7, 7, 6, 7, 7], [7, 6, 7, 6, 7], [6, 7, 7, 7, 6]]))
        .toEqual([[7, 6, 6, 6, 7], [6, 7, 6, 7, 6], [6, 6, 7, 6, 6], [6, 7, 6, 7, 6], [7, 6, 6, 6, 7]]);
    });
    test('5. invertMatrix([[1.2, 2.1, 2.1, 2.1], [2.1, 1.2, 2.1, 1.2], [1.2, 1.2, 2.1, 2.1]]) should return [[2.1, 1.2, 1.2, 1.2], [1.2, 2.1, 1.2, 2.1], [2.1, 2.1, 1.2, 1.2]].', () => {
        expect(invertMatrix([[1.2, 2.1, 2.1, 2.1], [2.1, 1.2, 2.1, 1.2], [1.2, 1.2, 2.1, 2.1]]))
        .toEqual([[2.1, 1.2, 1.2, 1.2], [1.2, 2.1, 1.2, 2.1], [2.1, 2.1, 1.2, 1.2]]);
    });
});