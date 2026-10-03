//https://www.freecodecamp.org/learn/daily-coding-challenge/10-03
// Given a password string, return "weak", "medium", or "strong" based on the strength of the password.
// A password is evaluated according to the following rules:
//     It is at least 8 characters long.
//     It contains both uppercase and lowercase letters.
//     It contains at least one number.
//     It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
// Return "weak" if the password meets fewer than two of the rules. 
// Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.

const checkStrength = password => {
    const length = password.length;
    const digitsRegex = /[\d]+/gm;
    const specialCharacterRegex = /[\!\@\#\$\%\^\*]+/gm;
    const alphaRegex = /[A-Z]+|[a-z]+/gm;
    let rulesPassed = 0;

    const digitsFound = password.match(digitsRegex) || [];
    const specialCharactersFound = password.match(specialCharacterRegex) || [];
    const alphaFound = password.match(alphaRegex) || [];

    if(length >= 8){
        rulesPassed = rulesPassed + 1;
    }
    if(digitsFound.length > 0) {
        rulesPassed = rulesPassed + 1;
    }
    if(specialCharactersFound.length > 0){
        rulesPassed = rulesPassed + 1;
    }
    if (alphaFound.length > 1) {
        rulesPassed = rulesPassed + 1;
    }

    if(rulesPassed < 2){
        return 'weak';
    }
    else if(rulesPassed === 2 || rulesPassed === 3){
        return 'medium';
    }
    else{
        return 'strong';
    }
}

module.exports = checkStrength;