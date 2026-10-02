//https://www.freecodecamp.org/learn/daily-coding-challenge/10-01
// Given a string representing a binary number, return its decimal equivalent as a number.
// A binary number uses only the digits 0 and 1 to represent any number. To convert binary to decimal, multiply each digit by a power of 2 and add them together. 
// Start by multiplying the rightmost digit by 2^0, 
// the next digit to the left by 2^1, and so on. Once all digits have been multiplied by a power of 2, add the result together.
// For example, the binary number 101 equals 5 in decimal because:
// 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 4 + 0 + 1 = 5

const toDecimal = binary => {
    let power = 0;
    let decimal = 0;
    for(let i = binary.length - 1; i >= 0; i--){
        decimal = decimal + (Number(binary[i]) * (2 ** power));
        power = power + 1;
    }
    return decimal;
}

module.exports = toDecimal;