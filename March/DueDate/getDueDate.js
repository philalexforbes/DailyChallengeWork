//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-30
// Given a date string, return the date 9 months in the future.
//     The given and return strings have the format "YYYY-MM-DD".
//     If the month nine months into the future doesn't contain the original day number, return the last day of that month.

const getDueDate = (dateStr) => {
    dateStr = dateStr.split('-');
    let year = Number(dateStr[0]);
    let day = Number(dateStr[2]);
    let month = Number(dateStr[1]);
    let addedNineMonths = month + 9
    year = addedNineMonths % 12 !== addedNineMonths && addedNineMonths % 12 !== 0 ? year + 1 : year; // doing a check here if the remainder isn't less than or the same as the addNineMonths or 0(December) we set the year up by one
    month = addedNineMonths > 12 ? addedNineMonths % 12 : addedNineMonths; // similar here if addNineMonths is greater than 12 we need to get the remainder for the month
    if(month === 2 && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) && day > 29){
        day = 29;
    }
    else if (month === 2 && day > 28){
        day = 28;
    }
    month = month < 10 ? `0${month}` : month;
    return `${year}-${month}-${day}`;
}

module.exports = getDueDate;