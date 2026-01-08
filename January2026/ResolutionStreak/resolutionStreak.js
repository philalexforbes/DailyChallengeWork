//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-01
// Given an array of arrays, where each sub-array represents a day of your resolution activities and contains three integers: the number of steps walked that day, the minutes of screen time that day, and the number of pages read that day; determine if you are keeping your resolutions.
//     The first sub-array is day 1, and second day 2, and so on.
// A day is considered successful if all three of the following goals are met:
//     You walked at least 10,000 steps.
//     You had no more than 120 minutes of screen time.
//     You read at least five pages.
// If all of the given days are successful, return "Resolution on track: N day streak." Where N is the number of successful days.
// If one or more days is not a success, return "Resolution failed on day X: N day streak.". Where X is the day number of the first unsuccessful day, and N is the number of successful days before the first unsuccessful day.

function resolutionStreak(days) {
    let streak = 0;
    let dayFailed = 0;
    let message = '';

    for(let i = 0; i < days.length; i++){
      let steps, screenTime, pages;
      steps = days[i][0] >= 10000 ? true : false;
      screenTime = days[i][1] <= 120 ? true : false;
      pages = days[i][2] >= 5 ? true : false;
      if(steps === true && screenTime === true && pages === true){
        streak += 1;
      }
      else {
        if(dayFailed === 0){
          dayFailed = i+1;
        }
      }
    }

    if(dayFailed !== 0){
      message = `Resolution failed on day ${dayFailed}: ${streak} day streak.`;
    }
    else {
      message = `Resolution on track: ${streak} day streak.`;
    }

    return message;
}

module.exports = resolutionStreak;