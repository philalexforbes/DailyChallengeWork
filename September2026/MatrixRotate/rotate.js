//https://www.freecodecamp.org/learn/daily-coding-challenge/09-06
// Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:
// 1 	2
// 3 	4

// You should return [[3, 1], [4, 2]], which looks like this:
// 3 	1
// 4 	2

const rotate = matrix => {
    const newMatrix = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let inner = [];
        for(let j = matrix.length -1 ; j >= 0; j--) {
            inner.push(matrix[j][i]);
        }
        newMatrix.push(inner);
    }
    return newMatrix;
}

module.exports = rotate;