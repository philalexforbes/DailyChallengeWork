//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-14
//Happy pi (π) day!
// Given an integer (n), where n is between 1 and 1000 (inclusive), return the nth decimal of π.
//     Make sure to return a number not a string.
// π with its first five decimals is 3.14159. So given 5 for example, return 9, the fifth decimal.
// You may have to find the first 1000 decimals of π somewhere.

const getPiDecimal = (n) => { 
    let pi = Iterator.from(generateDigitsOfPi(1001)); //to get up to 1000 digits we need to have 1001 since accessing position 1000 would be undefined
    pi = pi.toArray(); //because the generateDigitsOfPi is an iterable function we need to turn it into an array so that we can access the items easily
    return pi[n];
}

//grabbed from Unbounded Spigot Algorithms for the Digits of Pi by Jeremy Gibbons and stackoverflow since Math.PI would not compute past 15 digits
// the original code was posted by user trincot and I made a small modification to have it to calculate pi up to a specified digit
function * generateDigitsOfPi(n) {
    let q = 1n;
    let r = 180n;
    let t = 60n;
    let i = 2n;
    let iterate = 0;
    while (n > iterate) {
        let digit = ((i * 27n - 12n) * q + r * 5n) / (t * 5n);
        yield Number(digit);
        let u = i * 3n;
        u = (u + 1n) * 3n * (u + 2n);
        r = u * 10n * (q * (i * 5n - 2n) + r - t * digit);
        q *= 10n * i * (i++ * 2n - 1n);
        t *= u;
        iterate++;
    }
}


module.exports = getPiDecimal;