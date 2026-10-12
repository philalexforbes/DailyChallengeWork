//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-15
// Given an array with two values, return an array with the values swapped.
// For example, given ["A", "B"] return ["B", "A"].

const arraySwap = function(arr) {
    return arr.reverse();
    //or
    // let firstItem = arr.pop();
    // let secondItem = arr.pop();
    // arr.push(firstItem);
    // arr.push(secondItem);
    // return arr;
}

module.exports = arraySwap;