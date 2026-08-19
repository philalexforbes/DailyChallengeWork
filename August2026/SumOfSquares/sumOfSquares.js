//https://www.freecodecamp.org/learn/daily-coding-challenge/08-19
//Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

const sumOfSquares = n => {
    let num = 0;
    for(let i = 1; i <= n; i++){
        num = i**2 + num;
    }

    return num;
}

module.exports = sumOfSquares;