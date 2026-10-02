//https://www.freecodecamp.org/learn/daily-coding-challenge/09-04
// Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. 
// The third vowel should appear three times in a row, and so on.
//     The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
//     The original vowel should keeps its case.
//     Repeated vowels should be lowercase.
//     All non-vowel characters should keep their original case.

const repeatVowels = str => {
    const regex = /[AaEeIiOoUu]/gm;
    const matches = str.match(regex);
    str = str.split('');
    let newStr = '';


    for(let i = 0; i < str.length; i++) {
        newStr += str[i];
        let index = matches.indexOf(str[i]);
        if(index !== -1 && str[i].toLowerCase() === matches[index].toLowerCase()){
            for(let j = 0; j < index; j++) {
                newStr += str[i].toLowerCase();
            }
            matches[index] = '';
        }
    }
    return newStr;
}

module.exports = repeatVowels;