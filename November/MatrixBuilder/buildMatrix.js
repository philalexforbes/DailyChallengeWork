//https://www.freecodecamp.org/learn/daily-coding-challenge/11-05
// Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.
// For example, given 2 and 3, return:
// [
//   [0, 0, 0],
//   [0, 0, 0]
// ]

const buildMatrix = (rows, cols) => {
    let matrix = [];

    for(let i = 0; i < rows; i++){
        let innerArray = [];
        for(let j = 0; j < cols; j++) {
            innerArray.push(0);
        }
        matrix.push(innerArray);
    }
    return matrix;
}

module.exports = buildMatrix;