//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-20
// Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.
//     If multiple values are tied for most frequent, remove all of them.
//     Do not change any of the other elements or their order.

function purgeMostFrequent(arr) {
    let arrSet = new Set(arr); //removes duplicate values when creating a set
    arrSet = Array.from(arrSet); //convert to an array for later iteration ability
    let stringifiedArr = arr.join(); //creates an string to iterate through
    let newArr;
    let matches = [];
    for (let i = 0; i < arrSet.length; i++) {
        let match = [...stringifiedArr.matchAll(arrSet[i])];
        matches.push(match.length);
    }
    let sortedMatches = JSON.parse(JSON.stringify(matches)); //deep copy the matches array so as to not modify the original with the sorting and reversing
    sortedMatches.sort((a, b) => a - b);
    sortedMatches.reverse(); //orders the array from number of matches big to small
    let sortedMatchesString = sortedMatches.join(' ');
    let numberOfMatches = sortedMatchesString.match(sortedMatches[0]); //get the number of times the biggest number appears so we know if we have to iterate multiple times
    if(numberOfMatches.length > 1){
        for(let i = 0; i < numberOfMatches; i++){
            let index = matches.indexOf(sortedMatches[i]);
            newArr = arr.filter((item) => item !== arrSet[index]);
        }
    } else {
        let index = matches.indexOf(sortedMatches[0]);
        newArr = arr.filter((item) => item !== arrSet[index]);
    }
    return newArr;
}

module.exports = purgeMostFrequent;