//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-18
// Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with "X" and "O" characters of the given size.
//     The characters should alternate like a checkerboard.
//     The top-left cell must always be "X".
// For example, given [3, 3], return:
// [
//   ["X", "O", "X"],
//   ["O", "X", "O"],
//   ["X", "O", "X"]
// ]

function createBoard(dimensions) {
    let board = [];
    for (let i = 0; i < dimensions[0]; i++) {
        board.push([]);
        for (let j = 0; j < dimensions[1]; j++){
            if((i + j) % 2 === 0){ // adding row and column numbers this guarantees an odd or even situation so that every even is x and every odd is o
                board[i].push('X');
            } else {
                board[i].push('O');
            }
        }
    }
    return board;
}

module.exports = createBoard;