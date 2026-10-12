//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-19
// Given a matrix (an array of arrays) filled with two distinct values, return a new matrix where all occurrences of one value are swapped with the other.
// For example, given:
// [
//   ["a", "b"],
//   ["a", "a"]
// ]
// Return:
// [
//   ["b", "a"],
//   ["b", "b"]
// ]

const invertMatrix = (matrix) => {
    let distinctValue1 = matrix[0][0];
    let distinctValue2 = matrix[0][1];
    let invertedMatrix = [];

    for(let i = 0; i < matrix.length; i++) {
        let innerMatrix = [];
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === distinctValue1) {
                innerMatrix.push(distinctValue2);
            }
            else {
                innerMatrix.push(distinctValue1);
            }
        }
        invertedMatrix.push(innerMatrix);
    }

    return invertedMatrix;
}

module.exports = invertMatrix;