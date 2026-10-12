//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-20
// Given two strings, return a new string that interleaves their characters one at a time. 
// If one string is longer, append the remaining characters at the end.
// Begin with the first character of the first string.

const zipStrings = (a, b) => {
    let zippedString = '';
    let length = a.length > b.length ? a.length : b.length;
    for(let i = 0; i < length; i++) {
        if(a[i] !== undefined && b[i] !== undefined){
            zippedString = zippedString + a[i] + b[i];
        }
        else if(a[i] === undefined && b[i] !== undefined) {
            zippedString = zippedString + b.substring(i);
            break;
        }
        else if(b[i] === undefined && a[i] !== undefined) {
            zippedString = zippedString + a.substring(i);
            break;
        }
    }
    return zippedString;
}

module.exports = zipStrings;