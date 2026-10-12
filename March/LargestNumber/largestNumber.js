//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-18
//Given a string of numbers separated by various punctuation, return the largest number.
    // The given string will only contain numbers and separators.
    // Separators can be commas (","), exclamation points ("!"), question marks ("?"), colons (":"), or semi-colons (";").

const largestNumber = (str) => {
    const regex = /\d+\.?\d+|-?\d+/gm;
    let numbers = str.match(regex) || [];
    numbers.sort((a, b) => b - a);
    return Number(numbers[0]);
}

module.exports = largestNumber;