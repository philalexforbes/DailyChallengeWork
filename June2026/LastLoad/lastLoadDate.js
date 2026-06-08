//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-07
// Given the number of scoops of laundry detergent you have remaining and an array of how many scoops you used in each of the previous days,
//  return the number of full days of detergent you have remaining.
// Calculate your average daily usage from the usage history and assume that amount of usage each day going forward.

const lastLoadDate = (scoops, usage) => {
    const days = usage.length;
    const average = usage.reduce((sum, val) =>  sum + val) / days;
    return Math.floor(scoops / average);
}

module.exports = lastLoadDate;