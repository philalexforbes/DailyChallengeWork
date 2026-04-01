//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-01
// Given an array of numbers where all but one number follow a pattern, return a new array with the one number that doesn't follow the pattern fixed.
// The pattern will be one of:
//     The numbers increase from one to the next by a fixed amount (addition).
//     The numbers decrease from one to the next by a fixed amount (subtraction).
// For example, given [2, 4, 7, 8, 10] return [2, 4, 6, 8, 10].

const fixPrankNumber = (arr) => {
    let difference1 = arr[1] - arr[0];
    let difference2 = arr[arr.length-1] - arr[arr.length-2];
    //we want to try to figure out if either the first two numbers and the last two numbers return different numbers as that shapes how 
    //the code will proceed

    //if both differences are equal we should determine that the prank number is somewhere in the array
    //or if difference1 is the smaller number of the two differences then we need to start at the beginning of the array to find the prank number
    //and then replace it with the correct number
    if(difference1 === difference2 || difference1 < difference2){
        let tempValue = arr[0];
        for(let i = 0; i < arr.length; i++) {
            tempValue = tempValue + difference1;
            if(tempValue !== arr[i+1]){
                arr.splice((i+1), 1, tempValue);
                return arr;
            }
        }
    }
    //else if difference2 is the smaller number we may have an instance where the first item in the array is the prank number
    //so we should start at the end of the array to find the prank number and replace it with the correct number
    else if(difference2 < difference1) {
        let tempValue = arr[arr.length-1];
        for(let i = arr.length-1; i > 0; i--) {
            tempValue = tempValue - difference2;
            if(tempValue !== arr[i-1]){
                arr.splice((i-1), 1, tempValue);
                return arr;
            }
        }
    }
}

module.exports = fixPrankNumber;