//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-23
// Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:
//     Start with a #, and
//     be followed by either 3 or 6 hexadecimal characters.
// Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).

function isValidHex(str) {
    const regex = /^#[0-9a-fA-F]{3,6}$/gm;
    return regex.test(str);
}

module.exports = isValidHex;