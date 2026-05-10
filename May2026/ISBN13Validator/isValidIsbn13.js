//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-10
// Given a string, determine if it is a valid ISBN-13 number.
// A valid ISBN-13:
//     Contains only digits and hyphens
//     Has exactly 13 digits after removing hyphens
//     Passes the following check:
//         Multiply each digit by 1 or 3, alternating (multiply the first digit by 1, the second by 3, the third by 1, and so on).
//         The sum of the results must be divisible by 10.

const isValidIsbn13 = (str) => {
    const regex = /[\d]/gm;
    let isbn13Total = 0;
    let isbnMatches = str.match(regex);
    isbnMatches = isbnMatches.join('');

    if(isbnMatches.length !== 13) {
        return false;
    }

    for(let i = 0; i < isbnMatches.length; i++) {
        let isbnNum = Number(isbnMatches[i]);
        if((i+1) % 2 !== 0) {
            isbnNum = isbnNum * 1;
        }
        else {
            isbnNum = isbnNum * 3;
        }
        isbn13Total = isbn13Total + isbnNum;
    }

    return isbn13Total % 10 === 0 ? true : false;
}

module.exports = isValidIsbn13;