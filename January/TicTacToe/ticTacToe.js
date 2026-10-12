//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-10
// Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.
//     Each element in the given matrix is either an "X" or "O".
// A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.
// Return:
//     "X wins" if player X has three in a row.
//     "O wins" if player O has three in a row.
//     "Draw" if no player has three in a row.

function ticTacToe(board) {
    const rows = [
        [0, 1, 2], //row 1 horizontal
        [3, 4, 5], //row 2 horizontal
        [6, 7, 8], //row 3 horizontal
        [0, 3, 6], //column 1 vertical
        [1, 4, 7], //column 2 vertical
        [2, 5, 8], //column 3 vertical
        [0, 4, 8], //diagonal upper left to lower right
        [2, 4, 6] //diagonal upper right to lower left
    ];
    const flattenedBoard = board.flat();
    let gameOutcome = '';

    for(let i = 0; i < rows.length; i++) {
        if(flattenedBoard[rows[i][0]] === flattenedBoard[rows[i][1]] &&  flattenedBoard[rows[i][1]] === flattenedBoard[rows[i][2]]){ //if a = b and b = c then a will equal c
            gameOutcome = `${flattenedBoard[rows[i][0]]} wins`;
            break;
        } else {
            gameOutcome = `Draw`;
        }
    }
    return gameOutcome;
}

module.exports = ticTacToe;