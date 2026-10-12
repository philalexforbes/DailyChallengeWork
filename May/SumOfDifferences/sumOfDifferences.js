//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-26
// Given an array of numbers, return the sum of the differences between each number and the one that follows it.
// For example, given [1, 3, 4], return 3 (2 + 1).

const sumOfDifferences =(arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        if(i + 1 !== arr.length) {
            total = total + (arr[i+1] - arr[i]);
        }
    }
    return total;
}

module.exports = sumOfDifferences;