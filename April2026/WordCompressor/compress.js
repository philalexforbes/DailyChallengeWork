//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-24
// Given a string, return a compressed version of the string using the following rules:

//     The first occurrence of a word remains unchanged.
//     Subsequent occurrences are replaced with the position of the first occurrence, where the first word is at position 1.
//     Words are separated by a single space.

// For example, given "practice makes perfect and perfect practice makes perfect", return "practice makes perfect and 3 1 2 3".

const compress = (str) => {
    const words = str.split(' ');
    let indexesOfWords = [];

    function uniqueValues (value, index, array) {
        return array.indexOf(value) === index;
    }

    const uniqueWords = words.filter(uniqueValues);

    uniqueWords.forEach((word) => indexesOfWords.push(words.indexOf(word) + 1));

    for(let i = 0; i < uniqueWords.length; i++) {
        for(let j = 0; j < words.length; j++) {
            let index = words.indexOf(uniqueWords[i], indexesOfWords[i]);
            words[index] = indexesOfWords[i];
        }
    }
    return words.join(' ');

}

module.exports = compress;