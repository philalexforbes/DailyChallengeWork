//https://www.freecodecamp.org/learn/daily-coding-challenge/09-24
// Given an integer, determine if it is a perfect square.
// A number is a perfect square if you can multiply an integer by itself to achieve the number. 
// For example, 9 is a perfect square because you can multiply 3 by itself to get it.

const isPerfectSquare = n => {
    const squareRoot = Math.sqrt(n);

    return Number.isInteger(squareRoot);
}

module.exports = isPerfectSquare;