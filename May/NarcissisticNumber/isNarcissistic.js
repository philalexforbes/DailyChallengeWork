//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-05
// Given a positive integer, determine whether it is a narcissistic number.
//     A number is narcissistic if the sum of each of its digits raised to the power of the total number of digits equals the number itself.
// For example, 153 has 3 digits, and 13 + 53 + 33 = 153, so it is narcissistic.

const isNarcissistic = (n) => {
    const numberOfDigits = String(n).split('');
    let total = 0;
    numberOfDigits.forEach((number) => total = Math.pow(Number(number), numberOfDigits.length) + total);
    return n === total;
}

module.exports = isNarcissistic;