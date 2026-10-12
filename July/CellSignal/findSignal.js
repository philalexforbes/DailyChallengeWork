//https://www.freecodecamp.org/learn/daily-coding-challenge/07-25
// Given a grid containing three cell tower readings, determine the location of the phone.

//     Each cell in the grid is either 0 (no tower) or a positive integer representing the number of cells to the phone, measured in a straight line: horizontal, vertical, or diagonal.
//     Return the [row, col] of the cell that is the correct number of cells from all three towers.
//     There is always exactly one solution.

const findSignal = grid => {
    let row = 0;
    let column = 0;
    for(let i = 0; i < grid[0].length; i++){
        if(grid[0][i] !== 0){
            row = grid[0][i];
            break;
        }
    }

    let index = 0;
    let value = 0;
    for(let i = row; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] !== 0){
                index = j;
                value = grid[i][j];
                break;
            }
        }
        if(index !== 0){
            break;
        }
    }

    if(index !== (grid[row].length - 1)){
        column = value + index;
    }
    else{
        column = index - value;
    }
    return [row, column];
}

module.exports = findSignal;