//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-06
// Given a Unix timestamp in milliseconds, return the day of the week.
// Valid return days are:

//     "Sunday"
//     "Monday"
//     "Tuesday"
//     "Wednesday"
//     "Thursday"
//     "Friday"
//     "Saturday"
// Be sure to ignore time zones.

const getDayOfWeek = (timestamp) => {
    const days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }

    let date = new Date(timestamp);
    return days[date.getUTCDay()];
}

module.exports = getDayOfWeek;