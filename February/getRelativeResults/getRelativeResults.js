//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-10
//2026 Winter Games Day 5: Cross-Country Skiing
// Given an array of finish times for a cross-country ski race, convert them into times behind the winner.
//     Given times are strings in "H:MM:SS" format.
//     Given times will be in order from fastest to slowest.
//     The winners time (fastest time) should correspond to "0".
//     Each other time should show the time behind the winner, in the format "+M:SS".
// For example, given ["1:25:32", "1:26:10", "1:27:05"], return ["0", "+0:38", "+1:33"].

const getRelativeResults = (results) => {
    let relativeResults = ['0'];
    let date1 = new Date(`2000-01-01T0${results[0]}Z`);
    for(let i = 1; i < results.length; i++){
        let date2 = new Date(`2000-01-01T0${results[i]}Z`);
        let diff = date2 - date1;
        let timeDifference = '+';
        let minDiff = Math.floor(diff / 1000 / 60) % 60;
        let secondDiff = Math.floor(diff / 1000) % 60;
        secondDiff = secondDiff < 10 ? `0${secondDiff}` : secondDiff;
        timeDifference += `${minDiff}:${secondDiff}`;
        relativeResults.push(timeDifference);
    }
    return relativeResults;
}

module.exports = getRelativeResults;