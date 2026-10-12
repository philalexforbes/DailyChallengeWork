//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-24
// Given a string of malformed Roman numerals, return the value in standard Roman numeral notation.
// The input will only use additive notation, so each symbol adds its value to the total. As a reminder, here are the symbols and values:
// Symbol 	Value
// "I" 	1
// "V" 	5
// "X" 	10
// "L" 	50
// "C" 	100
// "D" 	500
// "M" 	1000
// When re-encoding, use the largest possible symbol at each step, using subtractive pairs ("IV", "IX", "XL", "XC", "CD", "CM") where needed.

const fixNumerals = (str) => {
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
    let total = 0;

    for(const s of str) {
        total = numerals[s] + total;
    }
    let roman = ''

    for (let i of Object.keys(numerals)) {
        let q = Math.floor(total / numerals[i]);
        total -= q * numerals[i];
        roman += i.repeat(q);
    }

    return roman;
}

module.exports = fixNumerals;