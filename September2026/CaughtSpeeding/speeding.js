//https://www.freecodecamp.org/learn/daily-coding-challenge/09-26
// Given an array of numbers representing the speed at which vehicles were observed traveling, 
// and a number representing the speed limit, 
// return an array with two items, the number of vehicles that were speeding, 
// followed by the average amount beyond the speed limit of those vehicles.
//     If there were no vehicles speeding, return [0, 0].

const speeding = (speeds, limit) => {
    const speedData = []; 
    let speeders = speeds.filter((speed) => speed > limit);
    let averageOver = speeders.map((a) => a - limit);
    averageOver = averageOver.reduce((acc, curr) => acc + curr, 0);
    averageOver = (averageOver / speeders.length) > 0 ? (averageOver / speeders.length) : 0;
    speedData.push(speeders.length);
    speedData.push(averageOver);
    return speedData;
}

module.exports = speeding;