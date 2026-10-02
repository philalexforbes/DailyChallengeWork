//https://www.freecodecamp.org/learn/daily-coding-challenge/09-07
// Given a string representing a Roman numeral, return its integer value.
// Roman numerals consist of the following symbols and values:
// Symbol 	Value
// I 	1
// V 	5
// X 	10
// L 	50
// C 	100
// D 	500
// M 	1000

// Numerals are read left to right. 
// If a smaller numeral appears before a larger one, the value is subtracted. 
// Otherwise, values are added.

const parseRomanNumeral = numeral => {
    const numerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let i = 0;
    let num = 0;

    while (i < numeral.length) {
        const twoChar = numeral[i] + (numeral[i + 1] || "");
        if (numerals[twoChar]) {
            num += numerals[twoChar];
            i += 2;
        } 
        else {
            num += numerals[numeral[i]];
            i++;
        }
    }
    return num;
}

module.exports = parseRomanNumeral;