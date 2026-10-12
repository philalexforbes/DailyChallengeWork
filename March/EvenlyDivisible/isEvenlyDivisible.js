//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-16
//Given two integers, determine if you can evenly divide the first one by the second one.

const isEvenlyDivisible = (a,b) => {
    return a % b === 0 ? true : false;
}

module.exports = isEvenlyDivisible;