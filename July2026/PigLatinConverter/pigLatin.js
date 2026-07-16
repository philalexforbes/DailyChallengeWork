//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-16
// Given a string, convert it to Pig Latin using the following rules:
//     If a word begins with a vowel ("a", "e", "i", "o", or "u"), add "way" to the end. For example, "universe" converts to "universeway".
//     If a word begins with one or more consonants, move them to the end and add "ay". For example, "hello" converts to "ellohay".
//     Preserve the case of the first letter. For example, "Hello" converts to "Ellohay".

const pigLatin = str => {
    const pigLatinStr = [];
    const vowelRegex = /(^[aeiouAEIOU])/gm;
    const consonantsRegex = /(^[^aeiouAEIOU]*)/gm;
    str = str.split(' ');
    for(let i = 0; i < str.length; i++){
        let vowelMatch = str[i].match(vowelRegex) || [];
        let consonantMatch = str[i].match(consonantsRegex) || [];
        if(vowelMatch.length !== 0) {
            let tempStr = str[i] + 'way';
            pigLatinStr.push(tempStr);
        }
        else if(consonantMatch.length !== 0){
            let isCharacterCapitalized = str[i][0] === str[i][0].toUpperCase();
            let tempStr = str[i].replace(consonantMatch[0],'');
            if(isCharacterCapitalized) {
                tempStr = tempStr[0].toUpperCase() + tempStr.slice(1);
                consonantMatch[0] = consonantMatch[0][0].toLowerCase() + consonantMatch[0].slice(1);
            }
            tempStr = tempStr + consonantMatch[0] + 'ay';
            pigLatinStr.push(tempStr);
        }
    }
    return pigLatinStr.join(' ');
}

module.exports = pigLatin;