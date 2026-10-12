//https://www.freecodecamp.org/learn/daily-coding-challenge/08-05
// Given a number of seconds, return the duration in spoken English.

//     Break the duration into hours, minutes, and seconds.
//     Skip any zero values.
//     Use singular or plural as appropriate ("1 hour", "2 hours").
//     If present, join the last two units with "and", and the second and third to last units with a comma ("1 hour, 2 minutes and 3 seconds").

const getSpokenDuration = seconds => {
    let hours = Math.floor(seconds / 3600);
    let remainder = seconds % 3600;
    let minutes = Math.floor(remainder / 60);
    remainder = remainder % 60;
    let hourDuration = '';
    let minuteDuration ='';
    let secondDuration = '';

    if(hours > 1) {
        hourDuration = `${hours} hours`;
    }
    else if(hours === 1) {
        hourDuration = `${hours} hour`;
    }

    if(minutes > 1) {
        minuteDuration = `${minutes} minutes`;
    }
    else if(minutes === 1) {
        minuteDuration = `${minutes} minute`;
    }

    if(remainder > 1) {
        secondDuration = `${remainder} seconds`;
    }
    else if(remainder === 1) {
        secondDuration = `${remainder} second`;
    }

    if(hourDuration !== '' && minuteDuration !== '' && secondDuration !== '') {
        return `${hourDuration}, ${minuteDuration} and ${secondDuration}`;
    }
    else if(hourDuration === '' && minuteDuration !== '' && secondDuration !== '') {
        return `${minuteDuration} and ${secondDuration}`;
    }
    else if(hourDuration !== '' && minuteDuration === '' && secondDuration !== '') {
        return `${hourDuration} and ${secondDuration}`;
    }
    else if(hourDuration !== '' && minuteDuration !== '' && secondDuration === '') {
        return `${hourDuration} and ${minuteDuration}`;
    }
    else if(hourDuration !== '' && minuteDuration === '' && secondDuration === '') {
        return `${hourDuration}`;
    }
    else {
        return `${secondDuration}`;
    }
}

module.exports = getSpokenDuration;