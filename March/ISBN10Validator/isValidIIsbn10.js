//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-29
// Given a string, determine if it's a valid ISBN-10.
// An ISBN-10 consists of hyphens ("-") and 10 other characters. After removing the hyphens ("-"):
//     The first 9 characters must be digits, and
//     The final character may be a digit or the letter "X", which represents the number 10.
// To validate it:
//     Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).
//     Add all the results together.
//     If the total is divisible by 11, it's valid.

const isValidIsbn10 = (str) => {
    let regex = /[\dX]/gm;
    let isbn10Total = 0;
    str = str.match(regex);
    if(str.length !== 10) {
        return false;
    }

    //check the first nine characters to ensure that they are numbers if any of them are not numbers we return false
    for(let i = 0; i < str.length - 1; i++) {
        if(str[i] === 'X') {
            return false;
        }
    }

    for(let i = 0; i < str.length; i++) {
        //because the last character can be X which is 10 we need a check here
        if(str[i] === 'X'){
            isbn10Total += ((i+1) * 10);
        }
        else {
            isbn10Total += (i+1) * Number(str[i]); 
        }
    }
    return isbn10Total % 11 === 0 ? true : false;
}

module.exports = isValidIsbn10;