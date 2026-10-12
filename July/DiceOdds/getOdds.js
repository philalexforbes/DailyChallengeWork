//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-18
// Given a number of six-sided dice to roll and a target sum, return the odds of rolling that sum as a string in the format "1 in X".
//     The number of dice will be between 1 and 6.
//     The target sum is always achievable with the given number of dice.
//     Round "X" to the nearest whole number.

const getOdds = (dice, target) => {
    const sides = 6;
    const totalOutcomes = 6**dice;
    let arr = [1];

    for(let die = 0; die < dice; die++){
        let newArr = new Array(arr.length + sides).fill(0);
        let sum = 0;

        for(let i = 0; i < newArr.length; i++) {
            sum += arr[i-1] ?? 0;
            sum -= arr[i - 1 - sides] ?? 0;
            newArr[i] = sum;
        }
        arr = newArr;
    }

    const ways = arr[target] ?? 0;

    return `1 in ${Math.round(totalOutcomes / ways)}`

}

module.exports = getOdds;