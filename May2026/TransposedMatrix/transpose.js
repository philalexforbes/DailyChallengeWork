//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-09
// Given a matrix (an array of arrays), return the transposed version of it.
// To transpose the matrix, swap the rows and columns. E.g: a value at index [0, 1] should move to index [1, 0].
// For example, given:
// [
//   [1, 2, 3],
//   [4, 5, 6]
// ]
// Return:
// [
//   [1, 4],
//   [2, 5],
//   [3, 6]
// ]

const transpose = (matrix) => {
    let newMatrix = [];
    let iLength = matrix[0].length;

    for(let i = 0; i < iLength; i++) {
        let innerMatrix = [];
        for(let j = 0; j < matrix.length; j++){
            innerMatrix.push(matrix[j][i]);
        }
        newMatrix.push(innerMatrix);
    }

    return newMatrix;
}

module.exports = transpose;