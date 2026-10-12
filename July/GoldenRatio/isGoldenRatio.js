//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-20
// Given two numbers, determine if their ratio approximates the golden ratio.
//     Use a golden ratio of 1.618
//     Allow a tolerance of 0.01

const isGoldenRatio = (a, b) => {
    let ratio = b > a ? b / a : a / b;
    const goldenRatio = 1.618;
    return Math.abs(goldenRatio - ratio) <= 0.01 ? true : false;
}

module.exports = isGoldenRatio;