//https://www.freecodecamp.org/learn/daily-coding-challenge/08-13
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
// Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.
//     Your function should handle sequences of any length greater than or equal to zero.
//     If the length is zero, return an empty array.
//     Note that the starting numbers are part of the sequence.

const fibonacciSequence = (startSequence, length) => {
    let n1 = startSequence[0], n2 = startSequence[1], nextNumber;
    const sequence = [];
    for(let i = 0; i < length; i++){
        nextNumber = n1 + n2;
        sequence.push(n1);
        n1 = n2;
        n2 = nextNumber;
    }  
    return sequence;
}

module.exports = fibonacciSequence;