//https://www.freecodecamp.org/learn/daily-coding-challenge/09-29
// Given a sentence, return the longest word in the sentence.
//     Ignore periods (.) when determining word length.
//     If multiple words are ties for the longest, return the first one that occurs.

const getLongestWord = sentence => {
    const regex = /\./gm;
    sentence = sentence.replace(regex,'');
    sentence = sentence.split(' ');
    const wordLengths = new Map();

    for(let i = 0; i < sentence.length; i++){
        wordLengths.set(sentence[i], sentence[i].length);
    }

    const sortedWords = Array.from(wordLengths).sort((a,b) => b[1] - a[1]);
    return sortedWords[0][0];
}

module.exports = getLongestWord;