//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-21
// Given a string of words, return only the words with an odd number of letters.
//     Words in the given string will be separated by a single space.
//     Return the words separated by a single space.

const getOddWords = (str) => {
    let words = str.split(' ');
    let oddWords = [];

    for(let i = 0; i < words.length; i++){
        if(words[i].length % 2 !== 0){
            oddWords.push(words[i]);
        }
    }
    return oddWords.join(' ');
}

module.exports = getOddWords;