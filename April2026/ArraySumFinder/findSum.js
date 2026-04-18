//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-18
// Given an array of numbers and a target number, return the first subset of two or more numbers that adds up to the target.
//     The "first" subset is the one whose elements have the lowest possible indices, prioritizing the earliest index first.
//     Each number in the array may only be used once.
//     If no valid subset exists, return "Sum not found".
// Return the matching numbers as an array in the order they appear in the original array.

const findSum = (arr, target) => {
    let elements = [];
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total = total + arr[i];
        if (i === (arr.length -1) && target < total){
          let removed = elements.pop();
          total = total - removed;
          if(total === target){
            elements.push(arr[i]);
            return elements;
          }
          else {
            elements.push(arr[i]);
            let arrDifferences = arr.filter(x => !elements.includes(x));
            for(let j = 0; j < elements.length; j++){
              for(let k = 0; k < arrDifferences.length; k++){
                let newElements = elements.toSpliced(j, 1, arrDifferences[k]);
                let newTotal = newElements.reduce((m,n) => m + n, 0);
                if(newTotal === target){
                  return newElements;
                }
              }

            }
          }
        }
        else if(target > total) {
          elements.push(arr[i]);
        }
        else if(target < total){
          let removed = elements.pop();
          total = total - removed;
          if(total === target){
            elements.push(arr[i]);
            return elements;
          }
          elements.push(arr[i]);
        }
        else if(target === total){
          elements.push(arr[i]);
          return elements;
        }
        else if (i === (arr.length -1)){
            let arrDifferences = arr.filter(x => !elements.includes(x));
        }
    }
    return 'Sum not found';
}

module.exports = findSum;