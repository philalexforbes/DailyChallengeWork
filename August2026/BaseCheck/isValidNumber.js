//https://www.freecodecamp.org/learn/daily-coding-challenge/08-12
// Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.
//     The string may contain integers, and uppercase or lowercase characters.
//     The check should be case-insensitive.
//     The base can be any number 2-36.
//     A number is valid if every character is a valid digit in the given base.
//     Example of valid digits for bases:
//         Base 2: 0-1
//         Base 8: 0-7
//         Base 10: 0-9
//         Base 16: 0-9 and A-F
//         Base 36: 0-9 and A-Z

const isValidNumber = (n,base) => {
    const baseTwoRegex = /[0-1]/gm;
    const baseEightRegex = /[0-7]/gm;
    const baseTenRegex = /[0-9]/gm;
    const baseSixteenRegex = /[0-9A-Fa-f]/gm;
    const baseThirtySixRegex = /[0-9A-Za-z]/gm;
    const length = n.length;

    if(base >= 2 && base <= 7) {
        let matches = n.match(baseTwoRegex) || [];
        return length === matches.length;
    }
    else if(base >= 8 && base <= 9){
        let matches = n.match(baseEightRegex) || [];
        return length === matches.length;
    }
    else if(base >= 10 && base <= 15) {
        let matches = n.match(baseTenRegex) || [];
        return length === matches.length;
    }
    else if(base <= 16) {
        let matches = n.match(baseSixteenRegex) || [];
        return length === matches.length;
    }
    else if(base <= 36) {
        let matches = n.match(baseThirtySixRegex) || [];
        return length === matches.length;
    }
}

module.exports = isValidNumber;