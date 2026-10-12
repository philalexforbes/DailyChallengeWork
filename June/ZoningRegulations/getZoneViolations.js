//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-13
// Given a 2D grid (array of arrays) representing a city's building layout, return the coordinates of all buildings that are violating zoning rules.
// Each cell in the grid contains one of the labels from the table below. A building is in violation if any of its (up to) 4 neighbors, horizontal or vertical, are a type it cannot be adjacent to.
// Label 	Type 	Cannot be adjacent to
// "i" 	industrial 	"R", "I"
// "A" 	Agricultural 	"C"
// "R" 	Residential 	"i", "C"
// "I" 	Institutional 	"i"
// "C" 	Commercial 	"R", "A"
// "" (empty string) 	undeveloped 	no restrictions
// Return the coordinates of all violating cells as an array of [row, col] pairs, in any order. If no violations exist, return an empty array.

const getZoneViolations = (grid) => {
    const violations = [];

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            let cell = [];
            if(grid[i][j] === 'i') {
                if(i + 1 !== grid.length) {
                    if(grid[i+1][j] === 'R' || grid[i+1][j] === 'I') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(j + 1 !== grid[i].length) {
                    if(grid[i][j+1] === 'R' || grid[i][j+1] === 'I') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(j !== 0) {
                    if(grid[i][j-1] === 'R' || grid[i][j-1] === 'I') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(i !== 0) {
                    if(grid[i-1][j] === 'R' || grid[i-1][j] === 'I') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
            }
            else if(grid[i][j] === 'A') {
                if(i + 1 !== grid.length) {
                    if(grid[i+1][j] === 'C') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(j + 1 !== grid[i].length) {
                    if(grid[i][j+1] === 'C') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(j !== 0) {
                    if(grid[i][j-1] === 'C') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(i !== 0) {
                    if(grid[i-1][j] === 'C') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
            }
            else if(grid[i][j] === 'R') {
                if(i + 1 !== grid.length) {
                    if(grid[i+1][j] === 'i' || grid[i+1][j] === 'C') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(j + 1 !== grid[i].length) {
                    if(grid[i][j+1] === 'i' || grid[i][j+1] === 'C') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(j !== 0) {
                    if(grid[i][j-1] === 'i' || grid[i][j-1] === 'C') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(i !== 0) {
                    if(grid[i-1][j] === 'i' || grid[i-1][j] === 'C') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
            }
            else if(grid[i][j] === 'I') {
                if(i + 1 !== grid.length) {
                    if(grid[i+1][j] === 'i') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(j + 1 !== grid[i].length) {
                    if(grid[i][j+1] === 'i') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(j !== 0) {
                    if(grid[i][j-1] === 'i') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(i !== 0) {
                    if(grid[i-1][j] === 'i') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
            }
            else if(grid[i][j] === 'C'){
                if(i + 1 !== grid.length) {
                    if(grid[i+1][j] === 'R' || grid[i+1][j] === 'A') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(j + 1 !== grid[i].length) {
                    if(grid[i][j+1] === 'R' || grid[i][j+1] === 'A') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(j !== 0) {
                    if(grid[i][j-1] === 'R' || grid[i][j-1] === 'A') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
                if(i !== 0) {
                    if(grid[i-1][j] === 'R' || grid[i-1][j] === 'A') {
                        if(cell.length === 0) {
                            cell.push(i);
                            cell.push(j);
                            violations.push(cell);
                        }
                    }
                }
            }
        }
    }
    return violations;

}

module.exports = getZoneViolations;