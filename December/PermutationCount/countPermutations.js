//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-04
// Given a string, return the number of distinct permutations that can be formed from its characters.
//     A permutation is any reordering of the characters in the string.
//     Do not count duplicate permutations.
//     If the string contains repeated characters, repeated arrangements should only be counted once.
//     The string will contain only letters (A-Z, a-z).
// For example, given "abb", return 3 because there's three unique ways to arrange the letters: "abb", "bab", and "bba".
//this may need recursion so look into that more before tackling
function countPermutations(str) {
    let result = 1;
    let numberOfChoices = 1;
    let reverseString = str.split('').reverse().join('');
    //this for loop gets the factorial of the number or permutations
    for (let i = 1; i <= str.length; i++) {
        result *= i;
    }
    //this step gets the number of choices from the permutations to use
    if(str.length <= 3 ){
        numberOfChoices = (str[0] === str[1] || str[1] === str[2]) ? 2 : 1;
    } else if(reverseString === str){
        numberOfChoices = str.length + 1;
    } else {
        numberOfChoices = str.length;
    }
    return result / numberOfChoices;
}

module.exports = countPermutations;
