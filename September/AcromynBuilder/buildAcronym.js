//https://www.freecodecamp.org/learn/daily-coding-challenge/09-08
// Given a string containing one or more words, return an acronym of the words using the following constraints:

//     The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
//     The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
//     The acronym letters should be returned in the order they are given.
//     The acronym should not contain any spaces.

const buildAcronym = (str) => {
    str = str.split(' ');
    let acronym = '';

    for(let i = 0; i < str.length; i++) {
        if(str[i] !== 'a' && str[i] !== 'for' && str[i] !== 'an' && str[i] !== 'and' && str[i] !== 'by' && str[i] !== 'of'){
            acronym += str[i][0].toUpperCase();
        }
    }
    return acronym;
}

module.exports = buildAcronym;