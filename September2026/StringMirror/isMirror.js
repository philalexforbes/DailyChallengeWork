//https://www.freecodecamp.org/learn/daily-coding-challenge/09-23
// Given two strings, determine if the second string is a mirror of the first.
//     A string is considered a mirror if it contains the same letters in reverse order.
//     Treat uppercase and lowercase letters as distinct.
//     Ignore all non-alphabetical characters.

const isMirror = (str1, str2) => {
    const regex = /\W/gm;
    str1 = str1.replaceAll(regex,'');
    str2 = str2.replaceAll(regex,'');
    let str1Reversed = '';

    for(let i = str1.length -1; i >= 0; i--){
        str1Reversed += str1[i];
    }
    return str1Reversed === str2;
}

module.exports = isMirror;