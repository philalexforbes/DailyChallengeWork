// https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-18
// Given a string, repeat its characters until the result is exactly 100 characters long. 
// If your repetitions go over 100 characters, trim the extra so it's exactly 100.

const oneHundred = function(chars) {
    let returnOneHundredChars = '';
    
    while(returnOneHundredChars.length < 100){
        returnOneHundredChars += chars;
    }

    return returnOneHundredChars.slice(0, 100);
}

module.exports = oneHundred;