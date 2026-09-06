const rotate = require('./rotate');

describe('Given a matrix rotate it 90 degrees clockwise', () => {
    test('1. rotate([[1]]) should return [[1]].', () => {
        expect(rotate([[1]])).toEqual([[1]]);
    });
    test('2. rotate([[1, 2], [3, 4]]) should return [[3, 1], [4, 2]].', () => {
        expect(rotate([[1, 2], [3, 4]])).toEqual([[3, 1], [4, 2]]);
    });
    test('3. rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [[7, 4, 1], [8, 5, 2], [9, 6, 3]].', () => {
        expect(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
        .toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
    });
    test('4. rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]) should return [[0, 1, 0], [0, 0, 1], [0, 1, 0]].', () => {
        expect(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]))
        .toEqual([[0, 1, 0], [0, 0, 1], [0, 1, 0]]);
    });
});