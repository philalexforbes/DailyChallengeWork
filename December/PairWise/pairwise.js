//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-19
// Given an array of integers and a target number, find all pairs of elements in the array whose values add up to the target and return the sum of their indices.
// For example, given [2, 3, 4, 6, 8] and 10, you will find two valid pairs:
//     2 and 8 (2 + 8 = 10), whose indices are 0 and 4
//     4 and 6 (4 + 6 = 10), whose indices are 2 and 3
// Add all the indices together to get a return value of 9.

function pairwise(arr, target) {
  let indexes = [];
  for(let i =0; i < arr.length; i++) {
    if(i !== (arr.length - i)){
      for(let j = i+1; j<arr.length; j++){
        let num = arr[i] + arr[j];
        if(num == target){
          indexes.push(i);
          indexes.push(j);
        }
      }
    }
  }
  let result = indexes.reduce((sum, current) => sum + current, 0);
  return result;
}

module.exports = pairwise;