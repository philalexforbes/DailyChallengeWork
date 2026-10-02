//https://www.freecodecamp.org/learn/daily-coding-challenge/09-25
//Given an array, return the second largest distinct number.

const secondLargest = arr => {
    function getDistinctValue(value,index, array) {
        return array.indexOf(value) === index;
    }
    const filteredArr = arr.filter(getDistinctValue);
    filteredArr.sort((a,b) => b - a);
    return filteredArr[1];
}

module.exports = secondLargest;