//https://www.freecodecamp.org/learn/daily-coding-challenge/09-13
// Given an array of integers from 1 to n, inclusive, 
// return an array of all the missing integers between 1 and n (where n is the largest number in the given array).
//     The given array may be unsorted and may contain duplicates.
//     The returned array should be in ascending order.
//     If no integers are missing, return an empty array.

const findMissingNumbers = arr => {
    arr.sort((a,b) => a-b);
    const largest = arr[arr.length - 1];
    let smallest = arr[0];
    const missingNumbers = [];

    for(let i = 0; i < largest; i++){
        if(arr.indexOf(smallest) === -1) {
            missingNumbers.push(smallest);
        }
        smallest = smallest + 1;
    }

    return missingNumbers;
}

module.exports = findMissingNumbers;