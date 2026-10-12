//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-12
// Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.
// The first element of each array corresponds to lap 1, the second to lap 2, and so on.

const largestDifference = (skater1, skater2) => {
    let lapDifferences = [];
    for(let i = 0; i < skater1.length; i++) {
        lapDifferences.push(Math.abs(skater1[i] - skater2[i]));
    }
    const biggestDifference = Math.max(...lapDifferences);
    return (lapDifferences.indexOf(biggestDifference) + 1);
}

module.exports = largestDifference;