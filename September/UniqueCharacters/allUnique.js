//https://www.freecodecamp.org/learn/daily-coding-challenge/09-09
// Given a string, determine if all the characters in the string are unique.
//     Uppercase and lowercase letters should be considered different characters.

const allUnique = str => {
    function nonUniqueValues (value, index, array) {
        return array.indexOf(value) !== index;
    }

    str = str.split('');
    const nonUniqueLetters = str.filter(nonUniqueValues);
    if(nonUniqueLetters.length === 0) {
        return true;
    }
    else{
        return false;
    }
}

module.exports = allUnique;