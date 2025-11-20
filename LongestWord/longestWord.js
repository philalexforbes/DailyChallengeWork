//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-20
// Given a sentence string, return the longest word in the sentence.
//     Words are separated by a single space.
//     Only letters (a-z, case-insensitive) count toward the word's length.
//     If there are multiple words with the same length, return the first one that appears.
//     Return the word as it appears in the given string, with punctuation removed.

const longestWord = function(sentence) {
    const regex = /(\w*'?\w)/gm;

    sentence = sentence.replaceAll('\'', '');
    let sentenceArray = sentence.match(regex);
    let wordLengths = sentenceArray.map(word => word.length).sort((a,b) => a > b ? -1 : 1); //sorts the array after it has gotten the length of each word from largest to smallest

    const firstMatch = sentenceArray.find((word) => word.length === wordLengths[0]); //will return the first word found that has the same length as the largest word length
    return firstMatch;
}

module.exports = longestWord;