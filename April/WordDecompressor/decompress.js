//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-25
// Given a compressed string, return the decompressed version using the following rules:
//     The given string is made up of words and numbers separated by spaces.
//     Leave the words unchanged.
//     Replace numbers with the word at that position, where the first word is at position 1.
// For example, given "practice makes perfect and 3 1 2 3", return "practice makes perfect and perfect practice makes perfect".

const decompress = (str) => {
    let words = str.split(' ');
    let indexOfWords = [];

    function getUniqueValues(value, index, array) {
        return array.indexOf(value) === index;
    }

    const uniqueWords = words.filter(getUniqueValues);

    uniqueWords.forEach((word) => indexOfWords.push(words.indexOf(word) + 1));
    words = words.join(' ');
    
    for(let i = 0; i < indexOfWords.length; i++){
        let regex = new RegExp(`\\b${indexOfWords[i]}\\b`, 'gm');
        words = words.replaceAll(regex, uniqueWords[i]);
    }
    return words;
}

module.exports = decompress;