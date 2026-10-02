// https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-14
// Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.
//     The weekend starts on Saturday.
//     If the given date is Saturday or Sunday, return "It's the weekend!".
//     Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
//     If X is 1, use "day" (singular) instead of "days" (plural).
//     Make sure the calculation ignores your local timezone.

const daysUntilWeekend = function (dateString) {
  let date = new Date(dateString).getUTCDay();
  let isItTheWeekEnd;
  if (date === 0 || date === 6) {
    isItTheWeekEnd = "It's the weekend!";
  } 
  else {
    let timeToWeekEnd = 6 - date;
    let dayOrDays = timeToWeekEnd === 1 ? 'day' : 'days';
    isItTheWeekEnd = `${timeToWeekEnd} ${dayOrDays} until the weekend.`
  }
  return isItTheWeekEnd;
}

module.exports = daysUntilWeekend;
