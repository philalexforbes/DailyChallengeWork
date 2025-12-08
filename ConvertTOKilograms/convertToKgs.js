//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-08
// Given a weight in pounds as a number, return the string "(lbs) pounds equals (kgs) kilograms.".
//     Replace "(lbs)" with the input number.
//     Replace "(kgs)" with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
//     1 pound equals 0.453592 kilograms.
//     If the input is 1, use "pound" instead of "pounds".
//     If the converted value is 1, use "kilogram" instead of "kilograms".

function convertToKgs(lbs) {
    let kgToLbRate = 0.453592;
    let convertedWeight = lbs * kgToLbRate;
    convertedWeight = convertedWeight.toFixed(2);
    let poundTense = lbs === 1 ? 'pound' : 'pounds';
    let kilogramTense = convertedWeight === '1.00' ? 'kilogram' : 'kilograms';
    return `${lbs} ${poundTense} equals ${convertedWeight} ${kilogramTense}.`
}

module.exports = convertToKgs;