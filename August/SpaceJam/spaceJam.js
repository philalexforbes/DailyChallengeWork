//https://www.freecodecamp.org/learn/daily-coding-challenge/08-14
// Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.
//     Non-alphabetical characters should remain unchanged (except for spaces).

const spaceJam = (s) => {
    return s.replaceAll(' ', '').split('').map((c) => c.toUpperCase()).join('  ');
}

module.exports = spaceJam;