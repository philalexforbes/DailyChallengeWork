//https://www.freecodecamp.org/learn/daily-coding-challenge/09-12
// Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:
//     If any single day has 10 hours or more, it's too much.
//     If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
//     If the average of the seven days is greater than or equal to 6 hours, it's too much.

const tooMuchScreenTime = hours => {
    const tenOrOver = hours.filter((x) => x >= 10);
    const average = (hours.reduce((curr, acc) => curr + acc, 0)) / hours.length;
    
    if(tenOrOver.length > 0){
        return true;
    }
    else if(average >= 6) {
        return true;
    }

    for(let i = 0; i < hours.length; i++) {
        let threeDayAverage = (hours[i] + hours[i+1] + hours[i+2]) / 3;
        if(threeDayAverage >= 8) {
            return true;
        }
    }
    return false;

}

module.exports = tooMuchScreenTime;