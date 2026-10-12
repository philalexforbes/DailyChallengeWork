//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-30
// Given a character, determine if its 8-bit binary representation can be found in the following grid, horizontally or vertically in either direction:
// 0 1 0 0 0 0 0 1
// 0 1 1 0 1 1 1 1
// 0 1 0 0 0 1 0 0
// 0 1 1 0 0 1 0 1
// 0 1 0 1 0 0 1 0
// 0 1 0 1 0 1 0 0
// 0 1 1 0 1 0 0 0
// 1 0 1 0 1 1 1 0
// For example, "A" has the binary representation 01000001, which appears in the first row from left to right.

const isInCrossword = (char) => {
    const crossword = [
        "01000001",
        "01101111",
        "01000100",
        "01100101",
        "01010010",
        "01010100",
        "01101000",
        "10101110",
        "00000001",
        "11111110",
        "01010011",
        "00001100",
        "01000011",
        "01110101",
        "01001001",
        "11010000",
        "10000010",
        "11110110",
        "00100010",
        "10100110",
        "01001010",
        "00101010",
        "00010110",
        "01110101",
        "10000000",
        "01111111",
        "11001010",
        "00110000",
        "11000010",
        "10101110",
        "10010010",
        "00001011"
    ]
    return crossword.includes(char.charCodeAt().toString(2).padStart(8,0));
}

module.exports = isInCrossword;