//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-31
// Given a date string in the format "YYYY-MM-DD", return the zodiac sign for that date using the following chart:
// Date Range 	Zodiac Sign
// March 21 - April 19 	"Aries"
// April 20 - May 20 	"Taurus"
// May 21 - June 20 	"Gemini"
// June 21 - July 22 	"Cancer"
// July 23 - August 22 	"Leo"
// August 23 - September 22 	"Virgo"
// September 23 - October 22 	"Libra"
// October 23 - November 21 	"Scorpio"
// November 22 - December 21 	"Sagittarius"
// December 22 - January 19 	"Capricorn"
// January 20 - February 18 	"Aquarius"
// February 19 - March 20 	"Pisces"

//     Zodiac signs are based only on the month and day, you can ignore the year.

const getSign = (dateStr) => {
    let newDateStr = new Date(dateStr);
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[newDateStr.getUTCMonth()];
    let day = newDateStr.getUTCDate();

    if((month === 'January' && day >= 20) || (month === 'February' && day <= 18)){
        dateStr = 'Aquarius';
    }
    else if((month === 'February' && day >= 19) || (month === 'March' && day <= 20)) {
        dateStr = 'Pisces';
    }
    else if((month === 'March' && day >= 21) || (month === 'April' && day <= 19)) {
        dateStr = 'Aries';
    }
    else if((month === 'April' && day >= 20) || (month === 'May' && day <= 20)) {
        dateStr = 'Taurus';
    }
    else if((month === 'May' && day >= 21) || (month === 'June' && day <= 20)) {
        dateStr = 'Gemini';
    }
    else if((month === 'June' && day >= 21) || (month === 'July' && day <= 22)) {
        dateStr = 'Cancer';
    }
    else if((month === 'July' && day >= 23) || (month === 'August' && day <= 22)) {
        dateStr = 'Leo';
    }
    else if((month === 'August' && day >= 23) || (month === 'September' && day <= 22)) {
        dateStr = 'Virgo';
    }
    else if((month === 'September' && day >= 23) || (month === 'October' && day <= 22)) {
        dateStr = 'Libra';
    }
    else if((month === 'October' && day >= 23) || (month === 'November' && day <= 21)) {
        dateStr = 'Scorpio';
    }
    else if((month === 'November' && day >= 22) || (month === 'December' && day <= 21)) {
        dateStr = 'Sagittarius';
    }
    else {
        dateStr = 'Capricorn';
    }
    return dateStr;
}

module.exports = getSign;