//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-13
// Given a full name as a string, return their initials.
//     Names to initialize are separated by a space.
//     Initials should be made uppercase.
//     Initials should be separated by dots.
// For example, "Tommy Millwood" returns "T.M.".

const getInitials = (name) => {
    const regex = /[A-Z]/gm;
    let matches = name.match(regex);
    matches = matches.join('.');
    return matches + '.';
}

module.exports = getInitials;