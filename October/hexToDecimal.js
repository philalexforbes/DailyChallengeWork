//https://www.freecodecamp.org/learn/daily-coding-challenge/10-11
// Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.
// Hexadecimal is a number system that uses 16 digits:

//     0-9 represent values 0 through 9.
//     A-F represent values 10 through 15.

const hexToDecimal = hex => {
    return parseInt(hex, 16);
}

module.exports = hexToDecimal;