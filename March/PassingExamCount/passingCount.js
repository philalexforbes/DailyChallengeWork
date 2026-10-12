//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-24
//Given an array of student exam scores and the score needed to pass it, return the number of students that passed the exam.

const passingCount = (scores, passingScore) => {
    return scores.filter((score) => score >= passingScore).length;
}

module.exports = passingCount;