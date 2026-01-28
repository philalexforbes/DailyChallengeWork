//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-28
//Given an array that contains nested arrays, return a new array with all values flattened into a single, one-dimensional array. 
// Retain the original order of the items in the arrays.

const flatten = (arr) => {
    return arr.flat(Infinity); // Using infinity here because we are pretending that we don't know how deep a nested array will be
}

module.exports = flatten;