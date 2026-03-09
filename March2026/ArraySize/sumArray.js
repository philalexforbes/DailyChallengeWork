//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-09
//Given an array of numbers, return the sum of all the numbers.

const sumArray = (numbers) => {
    return numbers.reduce((sum, current) => sum + current, 0);
}

module.exports = sumArray;