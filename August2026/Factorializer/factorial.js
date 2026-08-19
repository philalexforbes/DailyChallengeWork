//https://www.freecodecamp.org/learn/daily-coding-challenge/08-18
// Given an integer from zero to 20, return the factorial of that number. 
// The factorial of a number is the product of all the numbers between 1 and the given number.
//     The factorial of zero is 1.

const factorial = n => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = factorial;