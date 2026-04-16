//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-16
// Given a string with numbers and other characters, perform math on the numbers based on the count of non-digit characters between the numbers.
//     If the count of characters separating two numbers is even, use addition.
//     If it's odd, use subtraction.
//     Consecutive digits form a single number.
//     Operations are applied left to right.
//     Ignore leading and trailing characters that aren't digits.
// For example, given "3ab10c8", return 5. Add 3 and 10 to get 13 because there's an even number of characters between them. 
// Then subtract 8 from 13 because there's an odd number of characters between the result and 8.

const doMath = (str) => {
    const numbersRegex = /\d+/gm;
    const charactersRegex = /(?<=\d)\D+(?=\d)/gm;
    let numbers = str.match(numbersRegex);
    let characters = str.match(charactersRegex);
    let total = Number(numbers[0]);
    for(let i = 0; i < characters.length; i++){
        if(characters[i].length % 2 !== 0){
            total = total - Number(numbers[i+1]);
        } 
        else {
            total = total + Number(numbers[i+1]);
        }
    }

    return total;
}

module.exports = doMath;