//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-31
// Given an integer, n, return the number of valid combinations of n pairs of parentheses.
//     A valid combination is a string where every opening parentheses has a corresponding closing parentheses, and no closing parentheses appears before its matching opening parentheses.
// For example, given 2, there are 2 valid combinations:

// (())
// ()()

const getCombinations = (n) => {
    let count = 1;
    for(let i = 1; i < n + 1; i++){
        count = count * (n + i) / i;
    }
    return count / (n + 1);
}

module.exports = getCombinations;