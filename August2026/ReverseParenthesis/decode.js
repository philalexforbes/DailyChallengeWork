//https://www.freecodecamp.org/learn/daily-coding-challenge/08-26
// Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

//     All characters inside each pair of parentheses should be reversed.
//     Parentheses should be removed from the final result.
//     If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
//     Assume all parentheses are evenly balanced and correctly nested.

const decode = (s) => {
    let decoded = s;
    const regex = /\(([^()]+)\)/gm;
    
    while(regex.test(decoded)) {
        decoded = decoded.replace(regex, (_, p1) => {
            return p1.split('').reverse().join('');
        });
    }
    return decoded;
}

module.exports = decode;