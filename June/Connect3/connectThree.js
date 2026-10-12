//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-28
// Given a matrix of strings representing pieces on a game grid, determine if any player has three in a row.
//     Each cell contains "R", "Y", or "" (empty string).
//     Three in a row means three consecutive non-empty cells of the same type horizontally, vertically, or diagonally.
// Return:
//     A flat array with the winner and the coordinates of their three winning cells in the format: ["R", [0,2], [1,3], [2,4]]. Coordinates are returned top-to-bottom, then left-to-right.
//     An empty array if there is no winner.

const connectThree = matrix => {
    const winner = [];
    const length = matrix[0].length;
    const height = matrix.length;

    //check horizontal
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < 2; j++) {
            if(matrix[i][j] === 'R' || matrix[i][j] === 'Y') {
                if((matrix[i][j] === matrix[i][j+1] && matrix[i][j+2] === matrix[i][j+1])) {
                    winner.push(matrix[i][j]);
                    winner.push([i,j],[i,j+1],[i,j+2]);
                    return winner;
                }
            }
        }
    }

    //check vertical
    for(let i = 0; i < 2; i++) {
        for(let j = 0; j < length; j++) {
            if(matrix[i][j] === 'R' || matrix[i][j] === 'Y') {
                if((matrix[i][j] === matrix[i+1][j] && matrix[i+2][j] === matrix[i+1][j])) {
                    winner.push(matrix[i][j]);
                    winner.push([i,j],[i+1,j],[i+2,j]);
                    return winner;
                }
            }
        }
    }

    //check diagonal left to right from top
    for(let i = 0; i < 2; i++) {
        for(let j = 0; j < 2; j++) {
            if(matrix[i][j] === 'R' || matrix[i][j] === 'Y') {
                if((matrix[i][j] === matrix[i+1][j+1] && matrix[i+2][j+2] === matrix[i+1][j+1])) {
                    winner.push(matrix[i][j]);
                    winner.push([i,j],[i+1,j+1],[i+2,j+2]);
                    return winner;
                }
            }
        }
    }

    //check diagonal right to left from top
    for(let i = 0; i < 2; i++) {
        for(let j = 3; j > 1; j--) {
            if(matrix[i][j] === 'R' || matrix[i][j] === 'Y') {
                if((matrix[i][j] === matrix[i+1][j-1] && matrix[i+2][j-2] === matrix[i+1][j-1])) {
                    winner.push(matrix[i][j]);
                    winner.push([i,j],[i+1,j-1],[i+2,j-2]);
                    return winner;
                }
            }
        }
    }

    return winner;
}

module.exports = connectThree;