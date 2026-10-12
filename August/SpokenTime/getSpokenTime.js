//https://www.freecodecamp.org/learn/daily-coding-challenge/08-06
// Given the angles for the hour and minute hands of an analog clock in degrees (clockwise from 12), return the time in spoken English.

// Convert the minute hand angle to minutes (360° = 60 minutes), then use the following rules:
// Minutes 	Spoken
// 0 	"Y o'clock"
// 15 	"quarter past Y"
// 1–29 (excluding 15) 	"X minutes past Y"
// 30 	"half past Y"
// 45 	"quarter to Z"
// 31–59 (excluding 45) 	"X minutes to Z" (where X is 60 - minutes)

// Where Y is the current hour and Z is the next hour, both derived from the hour hand angle (360° = 12 hours).

// Note: Hand angles may not land exactly on a number, consider rounding them somehow.

const getSpokenTime = (hourAngle, minuteAngle) => {
    let hour = hourAngle / 30;
    let minute = (minuteAngle / 30) * 5;
    hour = Math.trunc(hour);
    minute = Math.floor(minute);

    if(minute === 0) {
        return `${hour} o'clock`
    }
    else if(minute === 15) {
        return `quarter past ${hour}`;
    }
    else if((minute > 0 && minute < 15) || (minute > 15 && minute <= 29)) {
        return `${minute} minutes past ${hour}`
    }
    else if(minute === 30) {
        return `half past ${hour}`;
    }
    else if(minute === 45) {
        hour = hour + 1;
        return `quarter to ${hour}`;
    }
    else {
        minute = 60 - minute;
        hour = hour + 1;
        return `${minute} minutes to ${hour}`;
    }
}

module.exports = getSpokenTime;