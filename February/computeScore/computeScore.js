//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-11
// Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.
// The first argument is an array of 10 judge scores, each a number from 0 to 10. 
// Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.
// Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.

const computeScore = (judgeScores, ...penalties) => {
    judgeScores.sort((a,b) => a > b ? -1 : 1);
    judgeScores = judgeScores.slice(1, -1);
    judgeScores = judgeScores.reduce((sum, current) => sum + current, 0);
    penalties = penalties === null || penalties === undefined ? [0] : penalties;
    penalties = penalties.reduce((sum, current) => sum + current, 0);
    judgeScores = judgeScores - penalties;
    return judgeScores;
}

module.exports = computeScore;