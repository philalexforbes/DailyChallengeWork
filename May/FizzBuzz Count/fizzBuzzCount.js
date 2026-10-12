//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-28
// Given a start and end number, count the number of fizz and buzz appearances in the range (inclusive).
//     Numbers divisible by 3 count as a fizz.
//     Numbers divisible by 5 count as a buzz.
//     Numbers divisible by both 3 and 5 count as both a fizz and a buzz.
// Return an object or dictionary with the counts in the format: { fizz, buzz }.

const fizzBuzzCount = (start, end) => {
    let fizzCount = 0, buzzCount = 0;
    for(let i = start; i <= end; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            fizzCount = fizzCount + 1;
            buzzCount = buzzCount + 1;
        }
        else if(i % 3 === 0){
            fizzCount = fizzCount + 1;
        }
        else if(i % 5 === 0) {
            buzzCount = buzzCount + 1;
        }
    }
    return {
        fizz: fizzCount,
        buzz: buzzCount,
    }
}

module.exports = fizzBuzzCount;