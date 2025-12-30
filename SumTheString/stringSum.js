//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-30
// Given a string containing digits and other characters, return the sum of all numbers in the string.
//     Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
//     Ignore any non-digit characters.

function stringSum(str) {
  const regex = /\d+/gm;
  let numbersInStr = str.match(regex) || [];
  numbersInStr = numbersInStr.map(num => Number(num));
  let strTotal = numbersInStr.reduce((sum, current) => sum + current, 0);

  return strTotal;
}

module.exports = stringSum;