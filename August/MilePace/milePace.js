//https://www.freecodecamp.org/learn/daily-coding-challenge/08-21
// Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, 
// return a string for the average time it took to run each mile in the format "MM:SS".

//     Add leading zeros when needed.

const milePace = (miles, duration) => {
    let seconds = Number(duration.split(':')[0]);
    seconds = seconds * 60;
    seconds = seconds + Number(duration.split(':')[1]);
    seconds = seconds / miles;
    let minutes = seconds / 60;
    seconds = minutes % 1;
    seconds = Math.round(seconds * 60);
    minutes = String(Math.floor(minutes));
    minutes = minutes.length === 1 ? '0' + minutes : minutes;
    seconds = String(seconds);
    seconds = seconds.length === 1 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
}

module.exports = milePace;