//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-14
// Given a string title, return a new string formatted in title case using the following rules:
//     Capitalize the first letter of each word.
//     Make all other letters in each word lowercase.
//     Words are always separated by a single space.

function titleCase(title) {
    title = title.toLowerCase();
    let titleArray = title.split(' ');
    let newTitle = [] 
    titleArray.forEach((word) => {
        newTitle.push(word[0].toUpperCase() + word.substr(1));
    });
    title = newTitle.join(' ');
    return title;
}

module.exports = titleCase;