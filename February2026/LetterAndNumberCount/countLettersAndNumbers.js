//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-26
// Given a string, return a message with the count of how many letters and numbers it contains.
//     Letters are A-Z and a-z.
//     Numbers are 0-9.
//     Ignore all other characters.
// Return "The string has X letters and Y numbers.", where "X" is the count of letters and "Y" is the count of numbers. 
// If either count is 1, use the singular form for that item. E.g: "1 letter" instead of "1 letters" and "1 number" instead of "1 numbers".

const countLettersAndNumbers = (str) => {
    const lettersRegex = /[A-Za-z]/gm;
    const numbersRegex = /[0-9]/gm;

    const letters = str.match(lettersRegex) || [];
    const numbers = str.match(numbersRegex) || [];
    let letter = letters.length > 1 || letters.length === 0 ? 'letters' : 'letter';
    let number = numbers.length > 1 || numbers.length === 0 ? 'numbers' : 'number';


    return `The string has ${letters.length} ${letter} and ${numbers.length} ${number}.`;
}

module.exports = countLettersAndNumbers;