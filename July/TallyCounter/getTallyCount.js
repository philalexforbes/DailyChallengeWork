//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-13
// Given a string of tally marks, return the total count represented.
//     Each pipe "|" represents one count.
//     Every fifth mark is represented as a forward slash "/", completing a group of five ("||||/").
//     Groups are separated by a space.

const getTallyCount = str => {
    const regex = /[|\/]/gm;
    str = str.match(regex);
    return str.length;
}

module.exports = getTallyCount;