//https://www.freecodecamp.org/learn/daily-coding-challenge/10-24
// Given a 2D array representing a map of the ocean floor that includes a hidden treasure, and an array with the coordinates ([row, column]) for the next dive of your treasure search, 
// return "Empty", "Found", or "Recovered" using the following rules:
//     The given 2D array will contain exactly one unrecovered treasure, which will occupy multiple cells.
//     Each cell in the 2D array will contain one of the following values:
//         "-": No treasure.
//         "O": A part of the treasure that has not been found.
//         "X": A part of the treasure that has already been found.
//     If the dive location has no treasure, return "Empty".
//     If the dive location finds treasure, but at least one other part of the treasure remains unfound, return "Found".
//     If the dive location finds the last unfound part of the treasure, return "Recovered".

const dive = (map, coordinates) => {
    const row = coordinates[0];
    const column = coordinates[1];
    const coord = map[row][column];
    const above = map?.[row - 1]?.[column];
    const below = map?.[row + 1]?.[column];
    const left = map?.[row]?.[column - 1];
    const right = map?.[row]?.[column + 1];
    
    if(coord === 'O' && (above === '-' || above === undefined)&& (below === '-' || below === undefined)&& (left === '-' || undefined)&& (right === '-' || undefined)) {
        return 'Found';
    }
    else if(coord === 'O' && (above === 'O' || below === 'O' || right === 'O' || left === 'O')) {
        return 'Found'
    }
    else if(coord === 'X' && (above === 'O' || below === 'O' || right === 'O' || left === 'O')) {
        return 'Found'
    }
    else if(coord === 'O' && (above === 'X' || below === 'X' || right === 'X' || left === 'X')){
        return 'Recovered'
    }
    else if(coord === 'X') {
        return 'Recovered';
    }
    else if ( coord === '-') {
        return 'Empty';
    }
} 

module.exports = dive;