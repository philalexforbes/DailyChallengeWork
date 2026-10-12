//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-08
// Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.
//     Each round consists of 5 targets.
//     Each missed target results in a 150 meter penalty loop.

function calculatePenaltyDistance(rounds) {
    let penaltyDistance = 0;
    rounds.forEach((round) => penaltyDistance += (5 - round));
    return penaltyDistance * 150;
}

module.exports = calculatePenaltyDistance;