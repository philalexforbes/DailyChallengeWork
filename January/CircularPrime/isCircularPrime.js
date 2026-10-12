//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-09
// Given an integer, determine if it is a circular prime.
// A circular prime is an integer where all rotations of its digits are themselves prime.
// For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.

function isCircularPrime(n) {
    let stringNumber = n.toString();
    let isNumberPrime;
    for(let i = 0; i < stringNumber.length; i++){
        n = Number(stringNumber);
        if(n % 2 === 0) {
            isNumberPrime = false;
            break;
        } 
        else {
            isNumberPrime = true;
        }
        stringNumber = stringNumber.slice(1) + stringNumber.slice(0, 1);
    }

    return isNumberPrime;
}

module.exports = isCircularPrime;