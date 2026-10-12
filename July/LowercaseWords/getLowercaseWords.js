//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-06
// Given a string, return only the words that are entirely lowercase, in their original order and with a space between each word.

const getLowercaseWords = str => {
    const regex = /\b[a-z]+\b/gm;
    str = str.match(regex);
    str = str.map((a) => a.trim()).join(' ');
    return str;
}

module.exports = getLowercaseWords;