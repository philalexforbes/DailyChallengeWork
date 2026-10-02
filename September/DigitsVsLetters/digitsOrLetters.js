//https://www.freecodecamp.org/learn/daily-coding-challenge/09-22
// Given a string, return "digits" if the string has more digits than letters, 
// "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

//     Digits consist of 0-9.
//     Letters consist of a-z in upper or lower case.
//     Ignore any other characters.

const digitsOrLetters = str => {
    const lettersRegex = /[a-zA-Z]/gm;
    const digitsRegex = /[0-9]/gm;
    const digits = str.match(digitsRegex).length;
    const letters = str.match(lettersRegex).length;

    if(letters > digits) {
        return 'letters';
    }
    else if(digits > letters) {
        return 'digits';
    }
    else {
        return 'tie';
    }
}

module.exports = digitsOrLetters;