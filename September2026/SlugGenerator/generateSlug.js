//https://www.freecodecamp.org/learn/daily-coding-challenge/09-17
// Given a string, return a URL-friendly version of the string using the following constraints:

//     All letters should be lowercase.
//     All characters that are not letters, numbers, or spaces should be removed.
//     All spaces should be replaced with the URL-encoded space code %20.
//     Consecutive spaces should be replaced with a single %20.
//     The returned string should not have leading or trailing %20.


const generateSlug = (str) => {
    const regex = /[?^*\[\]%#!.,-]/gm;
    const space = /\s{1,}/gm;
    str = str.trim();
    str = str.replace(regex, '');
    str = str.replace(space, '%20');
    return str.toLowerCase();
}

module.exports = generateSlug;