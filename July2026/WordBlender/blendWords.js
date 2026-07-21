//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-21
// Given two words, return a new word by combining the first half of the first word with the second half of the second word.
//     For odd-length words, the first half is the shorter half.


const blendWords = (word1, word2) => {
    const word1HalfLength = Math.floor(word1.length / 2);
    const word2HalfLength = Math.floor(word2.length / 2);
    const word1Half = word1.slice(0,word1HalfLength);
    const word2Half = word2.slice(word2HalfLength);
    return word1Half + word2Half;
}

module.exports = blendWords;