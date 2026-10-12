//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-20
//Given a string representing a variable name, convert it to consonant case using the following rules:
    // All consonants should be converted to uppercase.
    // All vowels (a, e, i, o, u in any case) should be converted to lowercase.
    // All hyphens (-) should be converted to underscores (_).

function toConsonantCase(str) {
    const vowelRegex = /[aeiouAEIOU]/gm;
    const consonantRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gm;
    str = str.replaceAll('-', '_');
    let vowels = str.match(vowelRegex);
    vowels.forEach((vowel) => str = str.replaceAll(vowel, vowel.toLowerCase()));
    let consonants = str.match(consonantRegex);
    consonants.forEach((consonant) => str = str.replaceAll(consonant, consonant.toUpperCase()));
    return str;
}

module.exports = toConsonantCase;