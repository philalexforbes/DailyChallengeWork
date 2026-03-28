//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-28
// Given an integer n, return the nth row of Pascal's triangle as an array.
// In Pascal's Triangle, each row begins and ends with 1, and each interior value is the sum of the two values directly above it.
// Here's the first 5 rows of the triangle:
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

const pascalRow = (n) => {
    let row = [1];
    n = n - 1; // need to do this because we are technically accessing the nth row of the triangle but because arrays start at 0 we must grab the actual nth element
    for (let i = 0; i < n; i++) {
        row.push(row[i] * (n-i) / (i+1));
    }
    return row;
}

module.exports = pascalRow;