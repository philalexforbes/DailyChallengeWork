//https://www.freecodecamp.org/learn/daily-coding-challenge/09-01
// The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

// Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence,
// return an array containing the sequence of the given length.

//     Your function should handle sequences of any length greater than or equal to zero.
//     If the length is zero, return an empty array.
//     Note that the starting numbers are part of the sequence.

const tribonacciSequence = (startSequence, length) => {
    const sequence = [];
    let n1 = startSequence[0];
    let n2 = startSequence[1];
    let n3 = startSequence[2];
    for(let i = 0; i < length; i++){
        let temp = n1 + n2 + n3
        sequence.push(n1);
        n1 = n2;
        n2 = n3;
        n3 = temp;
    }

    return sequence;
}

module.exports = tribonacciSequence;