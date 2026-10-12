//https://www.freecodecamp.org/learn/daily-coding-challenge/08-11
//Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.
    // The string can contain any characters.
    // The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
    // If there's an odd number of characters in the string, ignore the center character.

const isBalanced = s => {
    const vowels = /[aeiouAEIOU]/gm;
    const length = s.length % 2 === 0 ? s.length / 2 : Math.floor(s.length / 2);
    const firstHalf = s.slice(0,length);
    const secondHalf = s.length % 2 === 0 ? s.slice(length) : s.slice(length + 1);
    const firstMatches = firstHalf.match(vowels) || [];
    const secondMatches = secondHalf.match(vowels) || [];

    return firstMatches.length === secondMatches.length;
}

module.exports = isBalanced;