//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-13
//Given a positive integer, return "Odd" if it's an odd number, and "Even" is it's even.

function oddOrEven(n) {
    n = n % 2 === 0 ? 'Even' : 'Odd';
    return n;
}

module.exports = oddOrEven;