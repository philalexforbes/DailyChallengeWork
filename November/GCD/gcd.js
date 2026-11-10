//https://www.freecodecamp.org/learn/daily-coding-challenge/11-15
// Given two positive integers, return their greatest common divisor (GCD).
//     The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.
// For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. 
// So given 4 and 6, return 2, the largest number that appears in both sets of divisors.

const gcd = (x, y) => {
    let greatestCommon = 0;
    const largest = x > y ? x : y;

    for(let i = 1; i < largest; i++){
        if(x % i === 0 && y % i === 0){
            greatestCommon = i;
        }
    }
    return greatestCommon;
}

module.exports = gcd;