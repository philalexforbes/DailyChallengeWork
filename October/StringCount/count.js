//https://www.freecodecamp.org/learn/daily-coding-challenge/10-14
// Given two strings, determine how many times the second string appears in the first.

// The pattern string can overlap in the first string. 
// For example, "aaa" contains "aa" twice. The first two a's and the second two.

const count = (text, pattern) => {
    const regex = new RegExp(`(?=(${pattern}))`, 'g');
    const matches = text.match(regex) || [];
    return matches.length;
}

module.exports = count;