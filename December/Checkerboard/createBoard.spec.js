const createBoard = require('./createBoard');

describe('Multidimensional arrays of X and O match', () => {
    test('createBoard([3, 3]) should return [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]].', ()=> {
        expect(createBoard([3, 3])).toEqual([["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]]);
    });
    test('createBoard([6, 1]) should return [["X"], ["O"], ["X"], ["O"], ["X"], ["O"]].', ()=> {
        expect(createBoard([6, 1])).toEqual([["X"], ["O"], ["X"], ["O"], ["X"], ["O"]]);
    });
    test('createBoard([2, 10]) should return [["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]].', ()=> {
        expect(createBoard([2, 10])).toEqual([["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]]);
    });
    test('createBoard([5, 4]) should return [["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"]].', ()=> {
        expect(createBoard([5, 4])).toEqual([["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"]]);
    });
})