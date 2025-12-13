function gameOfLife(grid) {
    let newGrid = [];
    for(let i = 0; i < grid.length; i++){
        newGrid.push([]);
        for(let j = 0; j< grid[i].length; j++){
            let neighborTotal = determineCellNeighborsTotal([j], [i], grid, grid[i].length);
            console.log(neighborTotal);
            newGrid[i][j] = determineCellState(grid[i][j], neighborTotal);
        }
    }
    console.log(newGrid);
    return newGrid;
}

function determineCellState(cellState,total) {
  let state = 0;
  if (cellState === 0) {
    if(total === 3){
      state = 1;
    }
    else {
      state = 0;
    }
  } else {
    if(total < 2 || total > 3){
      state = 0;
    } else {
      state = 1;
    }
  }

  return state;
}

function determineCellNeighborsTotal(cell, row, grid, rowLength) {
    let neighborTotal = 0;
    if(rowLength === 3) {
        if (row == 0) {
            console.log('verify  row executes');
            if (cell == 0){
                neighborTotal = grid[0][1] + grid[1][0] + grid[1][1];
            } else if(cell == 1){
                neighborTotal = grid[0][0] + grid[0][2] + grid[1][0] + grid[1][1] + grid[1][2];
            } else {
                neighborTotal = grid[0][1] + grid[1][1] + grid[1][2];
            }
        } else if(row == 1){
            if (cell == 0) {
                neighborTotal = grid[0][0] + grid[0][1] + grid[1][1] + grid[2][0] + grid[2][1];
            } else if(cell == 1){
                neighborTotal = grid[0][0] + grid[0][1] + grid[0][2] + grid[1][0] + grid[1][2] + grid[2][0] + grid[2][1] + grid[2][2];
            } else {
                neighborTotal = grid[1][1] + grid[0][1] + grid[2][1] + grid[2][2] + grid[0][2];
            }
        } else {
            if (cell == 0) {
                neighborTotal = grid[1][0] + grid[1][1] + grid[2][1];
            } else if(cell == 1) {
                neighborTotal = grid[1][0] + grid[1][1] + grid[1][2] + grid[2][0] + grid[2][2];
            } else {
                neighborTotal = grid[2][1] + grid[1][1] + grid[1][2];
            }
        }
    } else if (rowLength == 4) {
        if (row == 0) {
            if (cell == 0) {
                neighborTotal = grid[0][1] + grid[1][0] + grid[1][1];
            } else if(cell == 1){
                neighborTotal = grid[0][0] + grid[0][2] + grid[1][0] + grid[1][1] + grid[1][2];
            } else if(cell == 2){
                neighborTotal = grid[0][1] + grid[1][1] + grid[1][2] + grid[0][3] + grid[1][3];
            } else {
                neighborTotal = grid[0][2] + grid[1][2] + grid[1][3];
            }
        } else if(row == 1){
            if (cell == 0) {
                neighborTotal = grid[0][0] + grid[0][1] + grid[2][0] + grid[1][1] + grid[2][1];
            } else if(cell == 1){
                neighborTotal = grid[0][0] + grid[0][1] + grid[0][2] + grid[1][0] + grid[1][2] + grid[2][0] + grid[2][1] + grid[2][2];
            } else if(cell == 2){
                neighborTotal = grid[0][1] + grid[0][2] + grid[0][3] + grid[1][1] + grid[1][3] + grid[2][1] + grid[2][2] + grid[2][3];
            } else {
                neighborTotal = grid[0][3] + grid[0][2] + grid[1][2] + grid[2][3] + grid[2][2];
            }
        } else if(row == 2){
            if (cell == 0) {
                neighborTotal = grid[1][0] + grid[1][1] + grid[2][1] + grid[3][0] + grid[3][1];
            } else if(cell == 1){
                neighborTotal = grid[1][0] + grid[1][1] + grid[1][2] + grid[2][1] + grid[2][2] + grid[3][0] + grid[3][1] + grid[3][2];
            } else if(cell == 2){
                neighborTotal = grid[1][2] + grid[1][3] + grid[1][1] + grid[2][3] + grid[2][1] + grid[3][3] + grid[3][2] + grid[3][1];
            } else {
                neighborTotal = grid[3][3] + grid[3][2] + grid[2][2] + grid[1][2] + grid[1][3];
            }
        } else {
            if (cell == 0) {
                neighborTotal = grid[2][0] + grid[2][1] + grid[3][1];
            } else if(cell == 1){
                neighborTotal = grid[3][0] + grid[3][2] + grid[2][0] + grid[2][1] + grid[2][2];
            } else if(cell == 2){
                neighborTotal = grid[3][1] + grid[3][3] + grid[2][3] + grid[2][2] + grid[2][1];
            } else {
                neighborTotal = grid[2][3] + grid[2][2] + grid[3][2];
            }
        }
    }
    return neighborTotal;
}

module.exports = gameOfLife;