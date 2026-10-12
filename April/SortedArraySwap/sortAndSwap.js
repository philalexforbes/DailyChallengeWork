//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-15
// Given an array of integers, return a new array using the following rules:
//     Sort the integers in ascending order
//     Then swap all values whose index is a multiple of 3 with the value before it.

const sortAndSwap = (arr) => {
    arr.sort((a, b) => a - b);
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        if(i !== 0 && i % 3 === 0) {
            let previous = arr[i-1]; 
            let current = arr[i];
            arr[i-1] = current;
            arr[i] = previous;
        }
    }
    return arr;
}

module.exports = sortAndSwap;