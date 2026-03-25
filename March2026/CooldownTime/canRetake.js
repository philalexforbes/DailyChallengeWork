//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-25
// Cooldown Time
// Given two timestamps, the first representing when a user finished an exam, and the second representing the current time, determine whether the user can take an exam again.
//     Both timestamps will be given the format: "YYYY-MM-DDTHH:MM:SS", for example "2026-03-25T14:00:00". Note that the time is 24-hour clock.
//     A user must wait at least 48 hours before retaking an exam.

const canRetake = (finishTime, currentTime) => {
    let finishTimeInMilli = Date.parse(finishTime); //parse converts the date to milliseconds
    let currentTimeInMilli = Date.parse(currentTime); 
    const fourtyEightHoursMilli = 172800000; //because the user has to wait 48 hours we want this to be unchanging
    const differenceInTime = currentTimeInMilli - finishTimeInMilli; //we want 
    if(differenceInTime >= fourtyEightHoursMilli) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = canRetake;