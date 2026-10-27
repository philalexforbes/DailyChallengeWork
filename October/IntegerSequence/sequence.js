//https://www.freecodecamp.org/learn/daily-coding-challenge/10-27
// Given a positive integer, return a string with all of the integers from 1 up to, and including, 
// the given number, in numerical order.

// For example, given 5, return "12345".

const sequence = n => {
    let numbers = '';

    for(let i = 1; i <= n; i++){
        numbers = numbers + `${i}`;
    }
    return numbers;
}

module.exports = sequence;