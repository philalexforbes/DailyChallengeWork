//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-04
// Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.
// Kaprekar's routine works as follows:
//     Arrange the digits in descending order to form the largest number
//     Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
//     Subtract the smaller from the larger
//     Repeat with the new number

const kaprekar = (n) => {
    let kaprekarsNumber = false;
    let increment = 0;
    while(!kaprekarsNumber) {
        let largestNumber = String(n).split('');
        let smallestNumber = String(n).split('');
        
        largestNumber = largestNumber.map((v) => Number(v));
        smallestNumber = smallestNumber.map((v) => Number(v));
        
        largestNumber = Number(largestNumber.sort((a,b) => b - a).join(''));
        smallestNumber = Number(smallestNumber.sort((a,b) => a - b).join(''));

        n = largestNumber - smallestNumber;
        increment = increment + 1;
        kaprekarsNumber = n === 6174 ? true : false;
    }
    return increment;
}

module.exports = kaprekar;