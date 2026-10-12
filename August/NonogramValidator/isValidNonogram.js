//https://www.freecodecamp.org/learn/daily-coding-challenge/08-07
// Given an array of clue numbers and an array of cells, determine whether the cells satisfy the nonogram clue.
// The clue is an array of numbers representing the lengths of consecutive filled cells, in order. 
// For example, a clue of [3, 2] means there should be 3 consecutive filled cells followed by 2 consecutive filled cells, separated by at least one empty cell.
// The row is an array of 1s (filled) and 0s (empty).

const isValidNonogram = (clue, cells) => {
    const filledInSquares = clue.reduce((a,c) => a + c, 0);
    const filledInCells = cells.filter((v) => v === 1).length;
    let acutualFilledInSquares = 0;
    let emptySquares = 0;
    const clueMatches = new Array(clue.length);
    let clues = 0;

    if(filledInSquares != filledInCells) {
        return false;
    }
    else {
        for (let i = 0; i < cells.length; i++) {
            if(cells[i] === 1) {
                let j = i;
                let square = 0;
                while(cells[j] === 1){
                    square = square + 1;
                    j = j + 1;
                }
                if(square === clue[clues]) {
                    clues = clues + 1;
                    square = 0;
                    i = j;
                }
                else if(square != clue[clues]){
                    return false;
                }
            }
        }
    }
    return true;
}

module.exports = isValidNonogram;