//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-25
// Given an array of numbers, return a new array containing the value needed to get from each number to the next number.
//     For the last number, use 0 since there is no next number.
// For example, given [1, 2, 4, 7], return [1, 2, 3, 0].

const findDifference = (arr) => {
    let differenceArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i+1 === arr.length){
            differenceArr.push(0);
        } else {
            let difference = arr[i+1] - arr[i];
            differenceArr.push(difference);
        }
    }
    return differenceArr;
}

module.exports = findDifference;