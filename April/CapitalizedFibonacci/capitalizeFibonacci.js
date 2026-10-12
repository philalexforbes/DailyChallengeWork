//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-02
// Given a string, return a new string where each letter is capitalized if its index is a Fibonacci number, and lowercased otherwise.
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
//     The first character is at index 0.
//     If the index of non-letter characters is a Fibonacci number, leave it unchanged.

const capitalizeFibonacci = (str) => {
    const fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]; //went with a hard coded value since calculating the sequence seemed wasteful for every execution
    str = str.toLowerCase(); //preemptively making the string lowercase so that the process isn't repeated on every index that isn't a fibonacci sequence number
    let fibonacciString = '';

    for(let i = 0; i < str.length; i++) {
        if(fibonacciSequence.includes(i)) {
            fibonacciString = fibonacciString + str[i].toUpperCase();
        }
        else{
            fibonacciString = fibonacciString + str[i];
        }
    }
    return fibonacciString;
}

module.exports = capitalizeFibonacci;