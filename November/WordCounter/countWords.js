//https://www.freecodecamp.org/learn/daily-coding-challenge/11-03
// Given a sentence string, return the number of words that are in the sentence.
// Words are any sequence of non-space characters and are separated by a single space.

const countWords = sentence => {
    sentence = sentence.split(' ');
    return sentence.length;
}

module.exports = countWords;