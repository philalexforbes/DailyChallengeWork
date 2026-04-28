//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-28
// Given an integer from 0 to 99, return its English word representation.
//     0 returns "zero".
//     Numbers 1-19 have unique names ("one", "two", ..., "ten", "eleven", ..., "eighteen", "nineteen").
//     Multiples of 10 from 20-90 have their own names ("twenty", "thirty", ..., "eighty", "ninety").
//     Numbers 21-99 that are not multiples of 10 are written as two words joined by a hyphen. For example "forty-two" and "fifty-three".

const getNumberWords = (n) => {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["","","twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let nString = String(n);
    if(nString.length === 1 && n >= 1) {
        return ones[n];
    }
    else if(nString.length === 2 && nString[0] === "1") {
        let onesPlace = Number(nString[1]);
        return teens[onesPlace];
    }
    else if(nString.length === 2 && Number(nString[0]) >= 2){
        let tensPlace = Number(nString[0]);
        let onesPlace = Number(nString[1]);
        if(onesPlace > 0) {
            return `${tens[tensPlace]}-${ones[onesPlace]}`;
        }
        else {
            return tens[tensPlace];
        }
    }
    else {
        return "zero";
    }
}

module.exports = getNumberWords;