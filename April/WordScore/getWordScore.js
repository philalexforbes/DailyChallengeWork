//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-27
// Given a word, return its score using a standard letter-value table:
// Letter 	Value
// A 	1
// B 	2
// ... 	...
// Z 	26
//     Upper and lowercase letters have the same value.

const getWordScore = (word) => {
    const characters =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    word = word.toUpperCase();
    let wordScore = 0;
    for(let i = 0; i < word.length; i++) {
        let value = characters.indexOf(word[i]) + 1;
        wordScore = wordScore + value;
    }
    return wordScore;
}

module.exports = getWordScore;