//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-04
// In a distant galaxy, parsecs are used to measure both time and distance. Given an integer number of parsecs, return its equivalent in time or distance.
//     If the given integer is odd, it represents time. If it's even, it represents distance.
// Use these conversion rates:
// Parsecs 	Time/Distance
// 1 	2 hours
// 2 	6 light years
// Return the converted value as an integer.

const convertParsecs = (parsecs) => {
    return parsecs = parsecs % 2 === 0 ? parsecs * 3 : parsecs * 2;
}

module.exports = convertParsecs;