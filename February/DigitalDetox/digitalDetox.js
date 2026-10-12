//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-01
// Given an array of your login logs, determine whether you have met your digital detox goal.
// Each log is a string in the format "YYYY-MM-DD HH:mm:ss".
// You have met your digital detox goal if both of the following statements are true:
//     You logged in no more than once within any four-hour period.
//     You logged in no more than 2 times on any single day.

function digitalDetox(logs) {
    let detoxpassed = false;
    let detoxs = [];
    logs.sort();
    let dates = [];
    let dates1 = [];
    logs.forEach((log) => {dates.push(log.split(' ')[0])});
    logs.forEach((log) => {dates1.push(log.split(' ')[0])});
    let datesLength = dates.length;
    let times = [];
    logs.forEach((log) => {times.push(log.split(' ')[1].split(':')[0])});
    while(datesLength > 0){
        let date = dates.shift();
        let index = dates.indexOf(date);
        datesLength -=1;
        if(index !== -1 && date === dates[1]){
            return detoxpassed;
        }
    }
    for(let i = 0; i < times.length; i++){
        if(times[i+1] - times[i] >= 4) {
            detoxs.push(true);
        }
        else {
            if(String(dates1[i]) !== String(dates1[i+1]) && times[i+1] - times[i] < -20) {
                detoxs.push(false);
            }
            else if (String(dates1[i]) !== String(dates1[i+1])){
                detoxs.push(true);
            }
            else{
                detoxs.push(false);
            }
        }
    }
    return detoxs.indexOf(false) === -1 ? true : false;
}

module.exports = digitalDetox;