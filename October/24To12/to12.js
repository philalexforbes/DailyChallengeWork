//https://www.freecodecamp.org/learn/daily-coding-challenge/10-13
// Given a string representing a time of the day in the 24-hour format of "HHMM", 
// return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

// The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".

const to12 = time => {
    let hour = Number(time.slice(0,2));
    const minute = time.slice(2);
    let meridian = hour < 12 ? 'AM' : 'PM';

    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;

    return `${hour}:${minute} ${meridian}`;
} 

module.exports = to12;