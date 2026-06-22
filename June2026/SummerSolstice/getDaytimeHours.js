//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-21
// Today is the summer solstice, the longest day of the year in the Northern Hemisphere and the shortest in the Southern. 
// Given a latitude, return a string representing daytime and nighttime hours.
//     The latitude will be between 90 (north pole) and -90 (south pole), inclusive
//     The number of daytime hours = 12 + (latitude / 90) * 12
//     Round the daytime hours to the nearest even number
// Return a 24-character string using "☀️" for daytime hours and "🌑" for nighttime hours, where:
//     Each character represents one hour, starting at midnight (hour 0)
//     Sunrise and sunset fall symmetrically around noon
// For example, a latitude of 0 (the equator) has 12 hours of daylight, so sunrise is at 6:00 AM and sunset is at 6:00 PM. 
// Return: "🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑".

const getDaytimeHours = (latitude) => {
    let dayTime = 12 + (latitude / 90) * 12;
    dayTime = Math.ceil(dayTime) % 2 === 0 ? dayTime : Math.floor(dayTime);
    let nightTime = 24 - dayTime;
    nightTime = Math.ceil(nightTime) % 2 === 0 ? nightTime : Math.floor(nightTime);

    let daytimeHours = '';
    for(let i = 0; i < nightTime / 2; i++) {
        daytimeHours = daytimeHours + '🌑';
    }
    for(let i = 0; i < dayTime; i++) {
        daytimeHours = daytimeHours + '☀️';
    }
    for(let i = 0; i < nightTime / 2; i++) {
        daytimeHours = daytimeHours + '🌑';
    }
    return daytimeHours;
}

module.exports = getDaytimeHours;