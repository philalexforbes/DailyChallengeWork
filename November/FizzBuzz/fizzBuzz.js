//https://www.freecodecamp.org/learn/daily-coding-challenge/11-25
// Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of:

//     3 with "Fizz".
//     5 with "Buzz".
//     3 and 5 with "FizzBuzz".

const fizzBuzz = (n) => {
    const fizzBuzzArr = [];

    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArr.push('FizzBuzz');
        }
        else if(i % 3 === 0) {
            fizzBuzzArr.push('Fizz');
        }
        else if(i % 5 === 0) {
            fizzBuzzArr.push('Buzz');
        }
        else {
            fizzBuzzArr.push(i);
        }
    }

    return fizzBuzzArr;
}

module.exports = fizzBuzz;