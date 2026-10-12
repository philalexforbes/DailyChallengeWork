//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-08
// Given an array of medications and a string representing the current time, return the next medication you need to take and how long until you need to take it.
//     Each medication is in the format [name, lastTaken], where name is the name of the medication and lastTaken is the time it was last taken.
//     All given times will be in "HH:MM" (24-hour) format.
// Use the following medication schedule:
// Name 	Schedule
// Deployxitrin 	08:00, 16:00
// Debuggamanizole 	07:00, 13:00, 21:00
// Mergeflictamine 	every 4 hours
// Return a string in the format "{name} in Hh Mm". For example, "Debuggamanizole in 2h 0m" or "Deployxitrin in 1h 5m".

const medicationReminder = (medications, currentTime) => {
    const depTime = medications[0][1];
    const debTime = medications[1][1];
    const merTime = medications[2][1];
    const currentHour = currentTime.split(':')[0];
    const currentMinute = currentTime.split(':')[1];
    let nextDepHour = depTime.split(':')[0] === '08' ? '16' : '08';
    let nextDebHour = '';
    let nextMerHour = '';
    let nextMedication = '';
    let timeToHour, timeToMinutes;

    if(debTime.split(':')[0] === '07') {
        nextDebHour = '13';
    }
    else if(debTime.split(':')[0] === '13') {
        nextDebHour = '21';
    }
    else if (debTime.split(':')[0] === '21') {
        nextDebHour = '07';
    }

    nextMerHour = Number(merTime.split(':')[0]) + 4;
    nextMerHour = nextMerHour < 10 ? `0${nextMerHour}` : `${nextMerHour}`;

    let timeToNextDepHour = Math.abs(Number(nextDepHour) - currentHour);
    let timeToNextDebHour = Math.abs(Number(nextDebHour) - currentHour);
    let timeToNextMerHour = Math.abs(Number(nextMerHour) - currentHour);


    if(timeToNextDepHour < timeToNextDebHour && timeToNextDepHour < timeToNextMerHour){
        nextMedication = medications[0][0];
        timeToHour = timeToNextDepHour;
        if(currentMinute === '00') {
            timeToMinutes = '0'
        } else {
            timeToMinutes = 60 - Number(currentMinute);
            timeToHour = eval(timeToHour - 1);
        }
    }
    else if(timeToNextDebHour < timeToNextDepHour && timeToNextDebHour < timeToNextMerHour) {
        nextMedication = medications[1][0];
        timeToHour = timeToNextDebHour;
        if(currentMinute === '00') {
            timeToMinutes = '0'
        } else {
            timeToMinutes = 60 - Number(currentMinute);
            timeToHour = eval(timeToHour - 1);
        }
    }
    else if(timeToNextDebHour === timeToNextMerHour) {
        nextMedication = medications[1][0];
        timeToHour = timeToNextDebHour;
        if(currentMinute === '00') {
            timeToMinutes = '0'
        } else {
            timeToMinutes = 60 - Number(currentMinute);
            timeToHour = eval(timeToHour - 1);
        }
    }
    else {
        nextMedication = medications[2][0];
        timeToHour = timeToNextMerHour;
        
        if(currentMinute === '00' && merTime.split(':')[1] === '00') {
            timeToMinutes = '0'
        }
        else if(currentMinute === '00' && merTime.split(':')[1] !== '00'){
            timeToMinutes = merTime.split(':')[1];
        } 
        else {
            timeToMinutes = 60 - Number(currentMinute);
            timeToHour = eval(timeToHour - 1);
        }
    }

    return `${nextMedication} in ${timeToHour}h ${timeToMinutes}m`;
}

module.exports = medicationReminder;