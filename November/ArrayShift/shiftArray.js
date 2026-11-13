//https://www.freecodecamp.org/learn/daily-coding-challenge/11-13
// Given an array and an integer representing how many positions to shift the array, return the shifted array.

//     A positive integer shifts the array to the left.
//     A negative integer shifts the array to the right.
//     The shift wraps around the array.

// For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].

const shiftArray = (arr, n) => {
    if(n > 0) {
        for(let i = 0; i < n; i++) {
            let pulled = arr.shift();
            arr.push(pulled);
        }
    }
    else {
        for(let i = 0; i > n; i--) {
            let popped = arr.pop();
            arr.unshift(popped);
        }
    }
    
    return arr;
}

module.exports = shiftArray;