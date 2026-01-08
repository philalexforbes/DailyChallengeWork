//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-02
//Given an integer n, return the nth number in the fibonacci sequence.
//The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

function nthFibonacci(n) {
    let n1 = 0, n2 = 1, nextNumber;
    for (let i = 1; i < n; i++){
        nextNumber = n1 + n2;
        n1 = n2;
        n2 = nextNumber;  
    }
    return n1;
}

module.exports = nthFibonacci;