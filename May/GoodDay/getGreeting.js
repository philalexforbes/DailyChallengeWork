//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-03
// Given a time string in "HH:MM" format (24-hour clock), return:
//     "Good morning" for times 05:00 to 11:59
//     "Good afternoon" for times 12:00 to 17:59
//     "Good evening" for times 18:00 to 21:59
//     "Good night" for times 22:00 to 04:59

const getGreeting = (time) => {
    const hour = Number(time.split(':')[0]);
    if(hour >= 5 && hour < 12){
        return 'Good morning';
    }
    else if(hour >= 12 && hour < 18){
        return 'Good afternoon';
    }
    else if(hour >= 18 && hour < 22){
        return 'Good evening';
    }
    else {
        return 'Good night';
    }
}

module.exports = getGreeting;