//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-13
// Given an array of integers that is sorted in ascending order except for one out-of-place element, return the index of that element.
//     If more than one element could be considered out of place, return the index of the first one.

const findOffender = (arr) => {
    let arrSorted = structuredClone(arr);
    arrSorted.sort((a,b) =>  a - b);
    for(let i = 0; i < arrSorted.length; i++) {
        if(arr[i] !== arrSorted[i]) {
            if(arrSorted.indexOf(arr[i]) > arr.indexOf(arrSorted[i]) || arr.indexOf(arrSorted[i]) === arrSorted.indexOf(arr[i])){
                return i;
            }
            else {
                return arr.indexOf(arrSorted[i]);
            }
        }
    }
}

module.exports = findOffender;