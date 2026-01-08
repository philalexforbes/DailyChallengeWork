//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-06
// Given a date in the format "Month day, year", return the date in the format "YYYY-MM-DD".
//     The given month will be the full English month name. For example: "January", "February", etc.
//     In the return value, pad the month and day with leading zeros if necessary to ensure two digits.
// For example, given "December 6, 2025", return "2025-12-06".

function formatDate(dateString) {
    let date = new Date(dateString);
    let dateArr = [];
    dateArr.push(date.getFullYear());
    dateArr.push(date.getMonth());
    dateArr[1] = dateArr[1] + 1;
    dateArr.push(date.getDate());
    dateArr[1] = dateArr[1] < 10 ? '0' + dateArr[1] : dateArr[1];
    dateArr[2] = dateArr[2] < 10 ? '0' + dateArr[2] : dateArr[2];
    dateString = dateArr.join('-');
    return dateString;
}

module.exports = formatDate;