//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-21
// Given two integers, return the least common multiple (LCM) of the two numbers.
// The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given 4 and 6, return 12 because:
//     Multiples of 4 are 4, 8, 12 and so on.
//     Multplies of 6 are 6, 12, 18 and so on.
//     12 is the smallest number that is a multiple of both.

const lcm = function(a, b) {
    let multiplesOfA = [];
    let multiplesOfB = [];
    let biggerOfInputs = a > b ? a : b;
    let firstMatch = 0;

    for(let i = 1; i <= biggerOfInputs; i++){
        multiplesOfA.push(a * i);
        multiplesOfB.push(b * i);
    }

    for(let i = 0; i < multiplesOfA.length; i++){
        firstMatch = multiplesOfB.find((multiple) => multiplesOfA[i] === multiple);
        if (firstMatch > 0){
            break;
        }
    }

    return firstMatch;
}

module.exports = lcm;