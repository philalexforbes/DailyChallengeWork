//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-09
// Given an array of elements, return the element that appears most frequently.
//     There will always be a single most frequent element.

function mostFrequent(arr) {
  let mostOccurences = 0;
  let mostCommon;
  let arrToString = arr.join(' ');
  for(let i = 0; i < arr.length; i++) {
    let currentFrequent = arrToString.matchAll(arr[i]);
    currentFrequent = Array.from(currentFrequent);
    if(currentFrequent.length > 1 && currentFrequent.length > mostOccurences) {
      mostOccurences = currentFrequent.length;
      mostCommon = arr[i];
    }
  }
  return mostCommon;
}

module.exports = mostFrequent;