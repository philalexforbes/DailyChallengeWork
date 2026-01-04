//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-04
// Given an integer year, determine whether it is a leap year.
// A year is a leap year if it satisfies the following rules:
//     The year is evenly divisible by 4, and
//     The year is not evenly divisible by 100, unless
//     The year is evenly divisible by 400.

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

module.exports = isLeapYear;