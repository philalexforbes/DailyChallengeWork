//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-14
// Given a string, return the letter from the string that appears last in the alphabet.
//     If two or more letters tie for the last in the alphabet, return the first one.
//     Ignore all non-letter characters.

const getLastLetter = (str) => {
    const regex = /[A-Za-z]/gm;
    str = str.match(regex);
    str.sort((a, b) => b.localeCompare(a));
    return str[0];
}

module.exports = getLastLetter;