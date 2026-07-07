//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-07
//Given two integers, round the first to the nearest multiple of the second.

const roundToNearestMultiple = (num, multiple) => {
    return Math.round(num/multiple) * multiple;
}

module.exports = roundToNearestMultiple;