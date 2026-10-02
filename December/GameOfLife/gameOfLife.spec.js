const gameOfLife = require('./gameOfLife');

describe('Verify the given matrix updates as per Conway\'s Game of Life', () => {
    test('gameOfLife([[0, 1, 0], [0, 1, 1], [1, 1, 0]]) should return [[0, 1, 1], [0, 0, 1], [1, 1, 1]].', ()=> {
        expect(gameOfLife([[0, 1, 0], [0, 1, 1], [1, 1, 0]])).toEqual([[0, 1, 1], [0, 0, 1], [1, 1, 1]]);
    });
    test('gameOfLife([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]]) should return [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]].', ()=> {
        expect(gameOfLife([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]])).toEqual([[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]]);
    });
    test('gameOfLife([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) should return [[0, 0, 0], [0, 1, 0], [0, 0, 0]].', ()=> {
        expect(gameOfLife([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toEqual([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
    });
    test('gameOfLife([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]]) should return [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]].', ()=> {
        expect(gameOfLife([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]])).toEqual([[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]]);
    });
})