//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-17
// Given today's date and a birthday, return the number of days until the person's next birthday.
//     Today's date is given as a string in "YYYY-MM-DD" format, with leading zeros, for example: "2026-07-16".
//     The birthday is given as a string in "M/D" format, without leading zeros, for example: "9/7".
//     If today is their birthday, return the number of days until their next birthday (not 0).
//     Leap years should be accounted for.

const daysUntilBirthday = (today, birthday) => {
    let birthdayYear = '';
    let splitBirthday = birthday.split('/');
    let splitToday = today.split('-');
    let todayMonth = splitToday[1][0] === '0' ? splitToday[1][1] : splitToday[1];
    let todayDay = splitToday[2][0] === '0' ? splitToday[2][1] : splitToday[2];
    let birthdayMonth = splitBirthday[0].length === 1 ? '0' + splitBirthday[0] : splitBirthday[0];
    let birthdayDay = splitBirthday[1].length === 1 ? '0' + splitBirthday[1] : splitBirthday[1]; 
    if(`${todayMonth}/${todayDay}` === birthday){
        birthdayYear = Number(splitToday[0]) + 1;
        birthdayYear = String(birthdayYear);
    }
    else if(Number(todayMonth) < Number(splitBirthday[0])){
        birthdayYear = splitToday[0];
    }
    else if(birthday === '2/29'){
        birthdayYear = Number(splitToday[0]) + 1;
        let leapYear = birthdayYear % 4 === 0 && (birthdayYear % 100 !== 0 || birthdayYear % 400 === 0);
        while(!leapYear){
            birthdayYear = birthdayYear + 1;
            leapYear = birthdayYear % 4 === 0 && (birthdayYear % 100 !== 0 || birthdayYear % 400 === 0)
        }
        birthdayYear = String(birthdayYear);
    }
    else{
        birthdayYear = Number(splitToday[0]) + 1;
        birthdayYear = String(birthdayYear);
    }
    let todaysDate = new Date(`${today}T00:00:00.000Z`);
    let birthdayDate = new Date(`${birthdayYear}-${birthdayMonth}-${birthdayDay}T00:00:00.000Z`);
    let differenceInMilliseconds = birthdayDate.valueOf() - todaysDate.valueOf();
    let minutes = Math.floor(differenceInMilliseconds / 60000);
    let hours = Math.round(minutes / 60);
    let days = Math.round(hours / 24);
    return days;
}

module.exports = daysUntilBirthday;