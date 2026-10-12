//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-30
// Given two strings, return a count of characters from the second string that can be found in the first.
//     Duplicate characters in the second string are counted separately.


const duplicateCharacterCount = (str1, str2) => {
    let count = 0;
    for(let i = 0; i < str2.length; i++) {
        if(str1.includes(str2[i])) {
            count = count + 1;
        }
    }
    return count;
}

module.exports = duplicateCharacterCount;