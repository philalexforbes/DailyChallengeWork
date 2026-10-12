//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-31
// Given a string representing the time you set your alarm and a string representing the time you actually woke up, determine if you woke up early, on time, or late.
//     Both times will be given in "HH:MM" 24-hour format.
// Return:
//     "early" if you woke up before your alarm time.
//     "on time" if you woke up at your alarm time, or within the 10 minute snooze window after the alarm time.
//     "late" if you woke up more than 10 minutes after your alarm time.
// Both times are on the same day.

const alarmCheck = (alarmTime, wakeTime) => {
    // went with converting the times to a date because using milliseconds for time conversion makes the logic easier to parse
    const alarmDate = new Date(`2026-03-31T${alarmTime}:00`);
    const wakeDate = new Date(`2026-03-31T${wakeTime}:00`);
    const differenceInMinutes = (wakeDate - alarmDate) / (1000 * 60); // getting the time in minutes here 
    
    if(differenceInMinutes < 0) {
        return 'early';
    }
    else if(differenceInMinutes <= 10) {
        return 'on time';
    }
    else {
        return 'late';
    }
}

module.exports = alarmCheck;