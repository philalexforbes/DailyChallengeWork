//https://www.freecodecamp.org/learn/daily-coding-challenge/08-04
// Given an array of golf scores and a corresponding array of course par values, return the golfer's handicap index using the following method:

//Calculate the differential for each round by subtracting the par from the score, 
// then return the average of all differentials rounded to one decimal place.

const calculateHandicap = (scores, pars) => {
    let handicap = 0;
    const length = scores.length;

    for(let i = 0; i < scores.length; i++) {
        let differential = scores[i] - pars[i];
        handicap = handicap + differential;
    }

    handicap = handicap / length;

    return Number(handicap.toFixed(1));
}

module.exports = calculateHandicap;