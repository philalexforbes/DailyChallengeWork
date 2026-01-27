//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-27
// Given a timestamp (number of milliseconds since the Unix epoch), return:
//     "odd" if the day of the month for that timestamp is odd.
//     "even" if the day of the month for that timestamp is even.
// For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.

const oddOrEvenDay = (timestamp) => {
    timestamp = new Date(timestamp);
    let day = timestamp.getUTCDate(); // using UTCDate to help deal with possible time difference and timezone issues
    return day % 2 === 0 ? 'even' : 'odd';
}

module.exports = oddOrEvenDay;