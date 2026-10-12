//https://www.freecodecamp.org/learn/daily-coding-challenge/08-08
// Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid the target color.

//     Each click changes the clicked cell's color and the entire region of connected cells of the same color with the target color.
//     Cells are connected horizontally and vertically (not diagonally).

const floodFill = (grid, [row, col], newValue) => {
    let newGrid = grid.map(row => [...row]);
    const oldValue = newGrid[row][col];
    newGrid[row][col] = newValue;

    const adjacents = [
        [-1, 0],
        [ 1, 0],
        [ 0, 1],
        [ 0,-1]
    ]

    for(let [dr, dc] of adjacents) {
        const [r,c] = [row + dr, col + dc];

        if(newGrid[r]?.[c] === oldValue) {
            newGrid = floodFill(newGrid, [r, c], newValue);
        }
    }

    return newGrid;
}

const locateDifference = (grid, target) => {
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[r].length; c++) {
            if(grid[r][c] !== target) {
                return [r, c];
            }
        }
    }
    return null;
}

const bucketFill = (grid, targetColor) => {
    let newGrid = grid;
    let count = 0;

    let found; 
    while(found = locateDifference(newGrid, targetColor)) {
        count += 1;
        newGrid = floodFill(newGrid, found, targetColor);
    }

    return count;
}

module.exports = bucketFill;