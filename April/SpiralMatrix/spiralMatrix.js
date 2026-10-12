//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-12
// Given a 2D matrix, return a flat array with all of its values in clockwise order.
// The returned array should have the top-left value first, move right along the top row, then down the right column, 
// then left along the bottom row, then up the left column. Repeat inward for any remaining layers.
// For example, given:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// Return [1, 2, 3, 6, 9, 8, 7, 4, 5].

const spiralMatrix = (matrix) => {
    let spiraledMatrix = [];
    //remove the first and last row
    let firstRow = matrix.shift();
    let lastRow = matrix.pop();
    lastRow = lastRow.reverse();
    //add the first row to the new array
    firstRow.forEach((value) => spiraledMatrix.push(value));
    
    //grab and remove the last item in each row
    for(let i = 0; i < matrix.length; i++){
        spiraledMatrix.push(matrix[i].pop());
    }
    //add the last row to the array
    lastRow.forEach((value) => spiraledMatrix.push(value));

    //iterate through the remaining rows removing the first items
    for(let i = matrix.length - 1; i >= 0; i--){
        spiraledMatrix.push(matrix[i].shift());
    }

    //remove the current first row
    firstRow = matrix.shift();
    firstRow.forEach((value) => spiraledMatrix.push(value));

    for(let i = 0; i > matrix.length; i++) {
        spiraledMatrix.push(matrix[i].pop());
    }

    if(matrix.length === 1){
        for(let i = matrix.length - 1; i >= 0; i--) {
            for(let j = 0; j <= matrix[i].length; j++){
                spiraledMatrix.push(matrix[i].pop());
            }
        }
    } else if(matrix.length > 1){
        for(let i = 0; i < matrix.length; i++){
            spiraledMatrix.push(matrix[i].pop());
        }
        for(let i = matrix.length - 1; i >= 0; i--) {
            for(let j = 0; j <= matrix[i].length; j++){
                if(i !== 0){
                    spiraledMatrix.push(matrix[i].pop());
                }
                else {
                   spiraledMatrix.push(matrix[i].shift()); 
                }
                
            }
        }
    }

    return spiraledMatrix;
}

module.exports = spiralMatrix;