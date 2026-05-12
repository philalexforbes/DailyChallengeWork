//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-12
// Given a string, return an object (JavaScript) or dictionary (Python) mapping each character to the number of times it appears.

const getFrequency = (str) => {
    str = str.split('');

    function uniqueValues (value, index, array) {
        return array.indexOf(value) === index;
    }
    const uniqueCharacters = str.filter(uniqueValues);

    let frequency = new Object();

    for(let i = 0; i < uniqueCharacters.length; i++) {
        let count = str.filter((char) => char === uniqueCharacters[i]).length;
        frequency[uniqueCharacters[i]] = count;
    }

    return frequency;
}

module.exports = getFrequency;