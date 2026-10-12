//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-15
// Given an array and a chunk size, return the array split into sub-arrays of that size.
//     The last chunk may be smaller if the array doesn't divide evenly.

const chunkArray = (arr, size) => {
    const chunkArrays = [];
    const splits = Math.floor(arr.length / size);
    for(let i = 0; i < splits; i++) {
        const chunk = [];
        for(let j = 0; j < size; j++){
            chunk.push(arr.shift());
        }
        chunkArrays.push(chunk);
    }
    if(arr.length !== 0){
        chunkArrays.push(arr);
    }
    
    return chunkArrays;
}

module.exports = chunkArray;