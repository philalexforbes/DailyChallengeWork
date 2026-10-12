//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-05
// Given a 2D grid, a starting position ([row, col]), and a new value, replace the value at the starting position and all connected cells of the same value with the new value.
//     Cells are connected if they are adjacent horizontally or vertically (not diagonally).
// Return the updated grid.

const bucketFill = (grid, [row, col], newValue) => {
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
            newGrid = bucketFill(newGrid, [r, c], newValue);
        }
    }

    return newGrid;
}

module.exports = bucketFill;