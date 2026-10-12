//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-23
// No Consecutive Repeats
// Given a string, determine if it has no repeating characters.
//     A string has no repeats if it does not have the same character two or more times in a row.

const hasNoRepeats = (str) => {
    let strArray = str.match(/[A-Za-z]/gm) || []; //we want to ignore spaces and punctuation
    str = strArray.join('');
    for (let i = 0; i < strArray.length; i++){
        let character = strArray[i].toLowerCase();
        if(i+1 === strArray.length){
            break;
        }
        else if(character === strArray[i+1].toLowerCase()){
            return false;
        }
    }
    return true;
}

module.exports = hasNoRepeats;