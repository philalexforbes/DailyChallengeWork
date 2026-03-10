//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-10
//Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.

const insertIntoArray = (arr, value, index) => {
    // let newArr = [];
    // for(let i = 0; i <= arr.length; i++){
    //     if(i === index) {
    //         newArr.push(value);
    //     }
    //     if(arr[i] !== undefined){
    //         newArr.push(arr[i]);
    //     }
    // }
    // return newArr;
    arr.splice(index, 0, value);
    return arr;
}

module.exports = insertIntoArray;