//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-19
// Given an array of hours slept each night leading up to today, and a target number of hours per night, return how many hours of sleep you need tonight to eliminate your sleep debt.
//     Include tonight's hours in the total time needed to catch up.
//     If you've slept enough to cover tonight's target or more, return 0.

const sleepDebt = (hoursSlept, targetHours) => {
    let hoursInDebt = 0; 
    hoursSlept.forEach((sleep) => hoursInDebt = (targetHours - sleep) + hoursInDebt);

    if(hoursInDebt > 0 && Math.abs(hoursInDebt) < targetHours){
        return hoursInDebt + targetHours
    }
    else if(hoursInDebt < 0 && Math.abs(hoursInDebt) >= targetHours) {
        return 0;
    }
    else {
        return hoursInDebt + targetHours
    }
}

module.exports = sleepDebt;