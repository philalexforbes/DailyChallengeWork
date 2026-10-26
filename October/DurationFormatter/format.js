//https://www.freecodecamp.org/learn/daily-coding-challenge/10-26
// Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. 
// Return the time using the following rules:
//     Seconds: Should always be two digits.
//     Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
//     Hours: Should be included only if they're greater than zero.

const format = seconds => {
    const length = String(seconds);

    let remainder = 0;

    if(length.length <= 3){
        let minutes = Math.floor(seconds / 60);
        remainder = String(seconds % 60);
        remainder = remainder.length === 1 ? `0${remainder}` : remainder;
        return `${minutes}:${remainder}`;
    }
    else{
        let hours = Math.floor(seconds / 60);
        let minutes = String(hours % 60);
        minutes = minutes.length === 1 ? `0${minutes}` : minutes;
        hours = Math.floor(hours/60);
        remainder = String(seconds % 60);
        remainder = remainder.length === 1 ? `0${remainder}` : remainder;

        return `${hours}:${minutes}:${remainder}`
    }
}

module.exports = format;