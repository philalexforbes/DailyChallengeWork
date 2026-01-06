//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-06
// Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.
//     Vowels are "a", "e", "i", "o", and "u" in any case.
//     Non-alphabetical characters should remain unchanged.

function vowelCase(str) {
    const regex = /[aeiouAEIOU]/gm;
    str = str.toLowerCase();
    let vowels = str.match(regex);
    vowels.forEach((vowel) => str = str.replaceAll(vowel, vowel.toUpperCase()));
    return str;
}

module.exports = vowelCase;