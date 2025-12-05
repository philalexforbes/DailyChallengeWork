//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-01
// Given a distance in miles as a number, return the equivalent distance in kilometers.
//     The input will always be a non-negative number.
//     1 mile equals 1.60934 kilometers.
//     Round the result to two decimal places.
//     Remove unnecessary trailing zeros from the rounded result.

function convertToKm(miles) {
    let milesToKilometers = 0.621371;
    let kilometers = miles / milesToKilometers;
    kilometers = Math.round(kilometers * 100) / 100;
    return kilometers;
}

module.exports = convertToKm;