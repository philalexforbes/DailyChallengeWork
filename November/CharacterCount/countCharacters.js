//https://www.freecodecamp.org/learn/daily-coding-challenge/11-23
// Given a sentence string, return an array with a count of each character in alphabetical order.
//     Treat upper and lowercase letters as the same letter when counting.
//     Ignore numbers, spaces, punctuation, etc.
//     Return the count and letter in the format "letter count". For instance, "a 3".
//     All returned letters should be lowercase.
//     Do not return a count of letters that are not in the given string.

const countCharacters = sentence => {
    const characters = [];
    const regex = /[a-z]/gm;
    sentence = sentence.toLowerCase();
    sentence = sentence.match(regex);
    sentence.sort((a,b) => a.localeCompare(b));
    const map = new Map();
    for(let i = 0; i < sentence.length; i++) {

        if(map.has(sentence[i])){
            let value = map.get(sentence[i]) + 1;
            map.set(sentence[i], value);
        }
        else {
            map.set(sentence[i], 1);
        }
    }
    const logMapElements = (value, key, map) => {
        characters.push(`${key} ${value}`);
    }
    map.forEach(logMapElements);
    return characters;
}

module.exports = countCharacters;