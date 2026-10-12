//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-15
//Given a string of numbers separated by commas, return an array of the numbers sorted from smallest to largest.

const sortNumbers = (str) => {
    let numbers = [];
    str.split(',').forEach((number) => numbers.push(Number(number)));
    numbers = numbers.sort((a,b) => a - b);
    return numbers;
}

module.exports = sortNumbers;