//https://www.freecodecamp.org/learn/daily-coding-challenge/08-01
//Given a 3x3 grid with one missing number (represented as 0), 
// return the missing number that completes the magic square, or "impossible" if no valid number exists.
//A magic square is a grid where every row, column, and diagonal adds up to the same number.

const solveMagicSquare = (grid) => {
    let missingNumber = 0;
    let innerArray = 0;
    let index = 0;
    let total = 0;
    let missingTotal = 0

    for(let i = 0; i < grid.length; i++) {
        index = grid[i].indexOf(0);
        if(index !== -1) {
            innerArray = i;
            break;
        }
    }

    if(innerArray !== 0){
        total = grid[0].reduce((acc, curr) => acc + curr, 0);
    }
    else {
        total = grid[1].reduce((acc, curr) => acc + curr, 0);
    }

    missingTotal = grid[innerArray].reduce((acc, curr) => acc + curr, 0);
    missingNumber = total - missingTotal;
    grid[innerArray][index] = missingNumber;
    missingTotal = grid[innerArray].reduce((acc, curr) => acc + curr, 0);

    if(index === 0) {
        let totalVertical = grid[0][0] + grid[1][0] + grid[2][0];
        if(innerArray === 0) {
            let diagonalTotal = grid[0][0] + grid[1][1] + grid[2][2];
            if(total === missingTotal && total === totalVertical && total === diagonalTotal){
                return missingNumber;
            }
            else {
                return 'impossible';
            }
        } 
        else if(innerArray === 2){
            let diagonalTotal = grid[2][0] + grid[1][1] + grid[0][2];
            if(total === missingTotal && total === totalVertical && total === diagonalTotal){
                return missingNumber;
            }
            else {
                return 'impossible';
            }
        }
        else {
            if(total === missingTotal && total === totalVertical){
                return missingNumber;
            }
            else {
                return 'impossible';
            }
        }
    } 
    else if (index === 1) {
        let totalVertical = grid[0][1] + grid[1][1] + grid[2][1];
        if(innerArray === 1){
            let diagonalTotal = grid[0][0] + grid[1][1] + grid[2][2];
            let otherDiagonal = grid[2][0] + grid[1][1] + grid[0][2];
            if(total === missingTotal && total === totalVertical && total === diagonalTotal && total === otherDiagonal){
                return missingNumber;
            }
            else {
                return 'impossible';
            }            
        }
        else {
            if(total === missingTotal && total === totalVertical){
                return missingNumber;
            }
            else {
                return 'impossible';
            }
        }
    }
    else {
        let totalVertical = grid[0][0] + grid[1][0] + grid[2][0];
        if(innerArray === 0){
            let diagonalTotal = grid[2][0] + grid[1][1] + grid[0][2];
            if(total === missingTotal && total === totalVertical && total === diagonalTotal){
                return missingNumber;
            }
            else {
                return 'impossible';
            }
        }
        else if(innerArray === 2) {
            let diagonalTotal = grid[2][2] + grid[1][1] + grid[0][0];
            if(total === missingTotal && total === totalVertical && total === diagonalTotal){
                return missingNumber;
            }
            else {
                return 'impossible';
            }
        }
        else {
            if(total === missingTotal && total === totalVertical){
                return missingNumber;
            }
            else {
                return 'impossible';
            }
        }
    }

}

module.exports = solveMagicSquare;