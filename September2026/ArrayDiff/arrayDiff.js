//https://www.freecodecamp.org/learn/daily-coding-challenge/09-10
// Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.
//     The returned array should be sorted in alphabetical order.

const arrayDiff = (arr1, arr2) => {
    let diffArray = [];

    if(arr1.length > arr2.length) {
        for(let i = 0; i < arr1.length; i++) {
            if(!arr2.includes(arr1[i])) {
                diffArray.push(arr1[i]);
            }
            if(!arr1.includes(arr2[i])) {
                diffArray.push(arr2[i]);
            }
        }
    }
    else if(arr1.length < arr2.length) {
        for(let i = 0; i < arr2.length; i++) {
            if(!arr1.includes(arr2[i])) {
                diffArray.push(arr2[i]);
            }
            if(!arr2.includes(arr1[i])) {
                diffArray.push(arr1[i]);
            }
        }
    }
    else {
        arr1.sort((a,b) => a.localeCompare(b));
        arr2.sort((a,b) => a.localeCompare(b));
        for(let i = 0; i < arr1.length; i++) {
            if(!arr2.includes(arr1[i])) {
                diffArray.push(arr1[i]);
            }
            if(!arr1.includes(arr2[i])){
                diffArray.push(arr2[i]);
            }
        }
    }

    diffArray.sort((a,b) => a.localeCompare(b));
    diffArray = diffArray.filter((element) => {
        return element !== undefined;
    })
    return diffArray;
}

module.exports = arrayDiff;