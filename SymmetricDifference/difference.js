// https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-05
// Given two arrays, return a new array containing the symmetric difference of them.
//     The symmetric difference between two sets is the set of values that appear in either set, but not both.
//     Return the values in the order they first appear in the input arrays.
function difference(arr1, arr2) {
    const arr1Set = new Set(arr1);
    const arr2Set = new Set(arr2);
    const newArray = Array.from(arr1Set.symmetricDifference(arr2Set));
    return newArray;
}

module.exports = difference;