//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-26
// Given an integer, return a string based on the following rules:
//     If the number is divisible by 3, return "Fizz".
//     If the number is divisible by 5, return "Buzz".
//     If the number is divisible by both 3 and 5, return "FizzBuzz".
//     Otherwise, return the given number as a string.

const fizzBuzzMini = (n) => {
    if(n % 3 === 0 && n % 5 === 0){
        n = 'FizzBuzz';
    }
    else if(n % 3 === 0) {
        n = 'Fizz';
    }
    else if(n % 5 === 0) {
        n = 'Buzz'
    }
    else {
        n = `${n}`;
    }

    return n;
}

module.exports = fizzBuzzMini;