//https://www.freecodecamp.org/learn/daily-coding-challenge/08-17
// Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. 
// Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.
//     The returned array should have the indices in ascending order.

const findTarget = (arr, target) => {
    let numbers = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                numbers.push(i, j);
                return numbers;
            }
        }
    }
    return "Target not found";

}

module.exports = findTarget;