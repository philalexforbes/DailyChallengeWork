//https://www.freecodecamp.org/learn/daily-coding-challenge/08-30
// Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.
//     Only include one instance of each value in the returned array.

const findDuplicates = arr => {
    const duplicates = [];

    for(let i = 0; i < arr.length; i++) {
        let shifted = arr.shift();
        if(arr.indexOf(shifted) !== -1){
            if(duplicates.indexOf(shifted) === -1) {
                duplicates.push(shifted);
            }   
        }
        i = 0;
    }
    duplicates.sort((a,b) => a-b);

    return duplicates;
}

module.exports = findDuplicates;