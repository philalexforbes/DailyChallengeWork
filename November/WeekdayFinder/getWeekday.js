//https://www.freecodecamp.org/learn/daily-coding-challenge/11-06
// Given a string date in the format YYYY-MM-DD, return the day of the week.
// Valid return days are:
//     "Sunday"
//     "Monday"
//     "Tuesday"
//     "Wednesday"
//     "Thursday"
//     "Friday"
//     "Saturday"
// Be sure to ignore time zones.

const getWeekday = dateString => {
    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let date = new Date(dateString);
    let day = date.getUTCDay();
    return weekDays[day];
}

module.exports = getWeekday;