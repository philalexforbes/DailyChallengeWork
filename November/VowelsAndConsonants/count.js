//https://www.freecodecamp.org/learn/daily-coding-challenge/11-11
// Given a string, return an array with the number of vowels and number of consonants in the string.
//     Vowels consist of a, e, i, o, u in any case.
//     Consonants consist of all other letters in any case.
//     Ignore any non-letter characters.
// For example, given "Hello World", return [3, 7].

const count = str => {
    const vowelRegex = /[aeiou]/gm;
    const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/gm;
    str = str.toLowerCase();
    let vowels = str.match(vowelRegex);
    let consonants = str.match(consonantRegex);
    return [vowels.length, consonants.length];
}

module.exports = count;