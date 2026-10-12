//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-23
// Given two times, determine whether you can get from the first to the second faster by moving forward or backward.
//     Times are given in 24-hour format ("HH:MM")
//     The clock wraps around (23:59 goes to 00:00 when moving forward, and 00:00 goes to 23:59 when moving backwards)
// Return:
//     "forward" if moving forward is shorter
//     "backward" if moving backward is shorter
//     "equal" if both directions take the same amount of time

const getDirection = (time1, time2) => {
    const [time1Hours, time1Minutes] = time1.split(':').map(Number);
    const [time2Hours, time2Minutes] = time2.split(':').map(Number);
    if(time1Hours > time2Hours && ((time2Hours + 12) > time1Hours)){
        return 'backward';
    }
    else if(time1Hours > time2Hours && ((time2Hours + 12) < time1Hours)){
        return 'forward';
    }
    else if(time1Hours < time2Hours && ((time1Hours + 12) > time2Hours)){
        return 'forward';
    }
    else if(time1Hours < time2Hours && ((time1Hours + 12) < time2Hours)){
        return 'backward';
    }
    else{
        return 'equal';
    }
}

module.exports = getDirection;