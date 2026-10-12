//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-09
//Given an array of numbers, return the sum of all the numbers.

const sumArray = (numbers) => {
    // let sum = 0;
    // for(let i = 0; i < numbers.length; i++) {
    //     sum = sum + numbers[i];
    // }
    // return sum;
    return numbers.reduce((sum, current) => sum + current, 0);
}

module.exports = sumArray;