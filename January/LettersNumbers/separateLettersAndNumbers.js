//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-29
//Given a string containing only letters and numbers, return a new string where a hyphen (-) is inserted every time the string switches from a letter to a number,
//  or a number to a letter.

const separateLettersAndNumber = (str) => {
    const regex = /[A-Za-z]+|[0-9]+/gm;
    str = [...str.matchAll(regex)];
    return str.join('-');
}

module.exports = separateLettersAndNumber;