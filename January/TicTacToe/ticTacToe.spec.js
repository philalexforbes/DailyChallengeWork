const ticTacToe = require('./ticTacToe');

describe('Determine the outcome of the tic tac toe game is correct', () => {
    test('1. ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]]) should return "X wins".', ()=> {
        expect(ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]])).toEqual('X wins');
    });
    test('2. ticTacToe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]]) should return "O wins".', ()=> {
        expect(ticTacToe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]])).toEqual('O wins');
    });
    test('3. ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]]) should return "Draw".', ()=> {
        expect(ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]])).toEqual('Draw');
    });
    test('4. ticTacToe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]]) should return "O wins".', ()=> {
        expect(ticTacToe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]])).toEqual('O wins');
    });
    test('5. ticTacToe([["X", "O", "O"], ["O", "X", "O"], ["O", "X", "X"]]) should return "X wins".', ()=> {
        expect(ticTacToe([["X", "O", "O"], ["O", "X", "O"], ["O", "X", "X"]])).toEqual('X wins');
    });
    test('6. ticTacToe([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]]) should return "Draw".', ()=> {
        expect(ticTacToe([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]])).toEqual('Draw');
    });
});