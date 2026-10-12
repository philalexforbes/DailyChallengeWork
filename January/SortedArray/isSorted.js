//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-08
// Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.
// If the given array is:
//     In ascending order (lowest to highest), return "Ascending".
//     In descending order (highest to lowest), return "Descending".
//     Not sorted in ascending or descending order, return "Not sorted".

function isSorted(arr) {
    let arraySortingTypeMsg = 'Not sorted';
    let sortedArrayAscending = arr.toSorted((a, b) => a - b);
    let sortedArrayDescending = arr.toSorted((a,b) => b - a);
    if(JSON.stringify(sortedArrayAscending) === JSON.stringify(arr)){
        arraySortingTypeMsg = 'Ascending';
    }
    else if(JSON.stringify(sortedArrayDescending) === JSON.stringify(arr)){
        arraySortingTypeMsg = 'Descending';
    }
    return arraySortingTypeMsg;
}

module.exports = isSorted;