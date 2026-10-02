//https://www.freecodecamp.org/learn/daily-coding-challenge/09-28
// Given the first line of a comma-separated values (CSV) file, return an array containing the headings.
//     The first line of a CSV file contains headings separated by commas.
//     Remove any leading or trailing whitespace from each heading.

const getHeadings = csv => {
    csv = csv.split(',');
    csv = csv.map((c) => c.trim());
    return csv;
}

module.exports = getHeadings;