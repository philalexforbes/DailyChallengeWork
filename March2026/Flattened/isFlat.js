//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-01
//Given an array, determine if it is flat.
//An array is flat if none of its elements are arrays.

const isFlat = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) === "object") {
            return false;
        }
    }
    return true;
}

module.exports = isFlat;