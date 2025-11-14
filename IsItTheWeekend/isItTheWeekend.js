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
