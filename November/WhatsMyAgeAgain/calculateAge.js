//https://www.freecodecamp.org/learn/daily-coding-challenge/11-27
// Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

//     Assume all birthdays are valid dates before November 27th, 2025.
//     Return the age as an integer.
//     Be sure to account for whether the person has already had their birthday in 2025.

const calculateAge = birthday => {
    const todayYear = 2025;
    const todayMonth = 10;
    const todayDay = 27;
    birthday = new Date(birthday);
    const birthdayYear = birthday.getFullYear();
    const birthdayMonth = birthday.getMonth();
    const birthdayDay = birthday.getDate();

    let years = todayYear - birthdayYear;

    if (todayMonth < birthdayMonth || (todayMonth === birthdayMonth && todayDay < birthdayDay)) {
        years--;
    }

    let months;
    if (todayMonth >= birthdayMonth) {
        months = todayMonth - birthdayMonth;
    } else {
        months = todayMonth + 12 - birthdayMonth;
    }

    if (todayDay < birthdayDay) {
        months--;
    }

    let days;
    if (todayDay >= birthdayDay) {
        days = todayDay - birthdayDay;
    } else {
        // Get last day of endDate's previous month
        const lastDayOfPrevMonth = new Date(todayYear, todayMonth, 0).getDate();
        days = lastDayOfPrevMonth - birthdayDay + todayDay;
    }

    return years;
}

module.exports = calculateAge;