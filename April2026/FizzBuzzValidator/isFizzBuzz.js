//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-08
// Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.
// In a valid FizzBuzz sequence:
//     Multiples of 3 are replaced with "Fizz".
//     Multiples of 5 are replaced with "Buzz".
//     Multiples of both 3 and 5 are replaced with "FizzBuzz".
//     All other numbers remain as integers.

const isFizzBuzz = (arr) => {
    let comparativeArr = [];
    if(typeof arr[0] === 'number' ){
        let tempNum = arr[0];
        for(let i = 0; i < arr.length; i++) {
            comparativeArr.push(tempNum);
            tempNum++;
        }
    }
    else if(typeof arr[arr.length - 1] === 'number') {
        let tempNum = arr[arr.length - 1];
        for(let i = arr.length - 1; i >= 0; i--){
            comparativeArr.unshift(tempNum);
            tempNum--;
        }
    }
    else {
        let tempNum = arr[(arr.length - 2)] + 1;
        for(let i = arr.length - 1; i >= 0; i--){
            comparativeArr.unshift(tempNum);
            tempNum--;
        }
    }

    for(let i = 0; i < comparativeArr.length; i++) {
        if(comparativeArr[i] % 5 === 0 && comparativeArr[i] % 3 === 0){
            comparativeArr[i] = 'FizzBuzz';
        }
        else if(comparativeArr[i] % 3 === 0) {
            comparativeArr[i] = 'Fizz';
        }
        else if(comparativeArr[i] % 5 === 0){
            comparativeArr[i] = 'Buzz';
        }
    }

    return JSON.stringify(arr) === JSON.stringify(comparativeArr);
}

module.exports = isFizzBuzz;