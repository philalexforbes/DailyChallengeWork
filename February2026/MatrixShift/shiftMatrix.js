//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-27
// Given a matrix (array of arrays) of numbers and an integer, shift all values in the matrix by the given amount.
//     A positive shift moves values to the right.
//     A negative shift moves values to the left.
// Values should wrap:
//     Treat the matrix as one continuous sequence of values.
//     When a value moves past the end of a row, it continues at the beginning of the next row.
//     When a value moves past the last position in the matrix, it wraps to the first position.
//     The same applies in reverse when shifting left.
// For example, given:
// [
//   [1, 2, 3],
//   [4, 5, 6]
// ]
// with a shift of 1, move all the numbers to the right one:
// [
//   [6, 1, 2],
//   [3, 4, 5]
// ]

const shiftMatrix = (matrix, shift) => {
    let internalSize = matrix[0].length;
    let newMatrix = [];
    let flattenedMatrix = matrix.flat(Infinity);
    let shiftAbs = Math.abs(shift); //because shift can be negative we want an absolute value
    //we want to move every element in the array by the prefaced shift
    //so we should first go through every element in the flattened matrix and move them either left or right as specified by the number of shifts
    for(let i = 0; i < shiftAbs; i++){
        //start at one below because otherwise it loops throught the entire array and we end up with the same array we started with
        for(let j = 1; j < flattenedMatrix.length; j++) {
            if (shift !== 0) {
                if(shift > 0) {
                    let firstItem = flattenedMatrix.shift();
                    flattenedMatrix.push(firstItem);
                } else {
                    let lastItem = flattenedMatrix.pop();
                    flattenedMatrix.unshift(lastItem);
                }
            }
        }
    }

    //from here we need to recreate the matrix so we are going to create an array inside the loop and then add the number of elements for each internal array
    for(let i = 0; i < flattenedMatrix.length; i++) {
        let internalMatrix = [];
        for(let j = 0; j < internalSize; j++) {
            let firstItem = flattenedMatrix.shift();
            internalMatrix.push(firstItem);
        }
        newMatrix.push(internalMatrix);
    }
    return newMatrix;
}

module.exports = shiftMatrix;