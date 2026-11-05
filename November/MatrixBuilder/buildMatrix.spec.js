const buildMatrix = require('./buildMatrix');

describe('Given a row and col return a matrix filled with 0s.', () => {
    test('1. buildMatrix(2, 3) should return [[0, 0, 0], [0, 0, 0]].', () => {
        expect(buildMatrix(2, 3))
        .toEqual([[0, 0, 0], [0, 0, 0]]);
    });
    test('2. buildMatrix(3, 2) should return [[0, 0], [0, 0], [0, 0]].', () => {
        expect(buildMatrix(3, 2))
        .toEqual([[0, 0], [0, 0], [0, 0]]);
    });
    test('3. buildMatrix(4, 3) should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].', () => {
        expect([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
        .toEqual(buildMatrix(4, 3));
    });
    test('4. buildMatrix(9, 1) should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].', () => {
        expect(buildMatrix(9, 1))
        .toEqual([[0], [0], [0], [0], [0], [0], [0], [0], [0]]);
    });
});