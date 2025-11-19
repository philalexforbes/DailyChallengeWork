// https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-19

// Given a string representing a Markdown heading, return the equivalent HTML heading.
// A valid Markdown heading must:

//     Start with zero or more spaces, followed by
//     1 to 6 hash characters (#) in a row, then
//     At least one space. And finally,
//     The heading text.

// The number of hash symbols determines the heading level. For example, one hash symbol corresponds to an h1 tag, and six hash symbols correspond to an h6 tag.

// If the given string doesn't have the exact format above, return "Invalid format".

// For example, given "# My level 1 heading", return "<h1>My level 1 heading</h1>".

// Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

const convert = function(heading) {
    const regex = /#+\s+/gm;

    let splitInput = heading.split(regex);
    let matchedHeadingInput = heading.match(regex);
    let returnHeading = '';

    if(matchedHeadingInput !== null ){
        matchedHeadingInput[0] = matchedHeadingInput[0].trim();
        if(matchedHeadingInput[0].length < 7){
            let headerNumber = matchedHeadingInput[0].length;
            // let headerElement = document.createElement(`h${headerNumber}`);
            // headerElement.textContent = splitInput[1];
            returnHeading = `<h${headerNumber}>${splitInput[1]}</h${headerNumber}>`
        }
        else {
            returnHeading = 'Invalid format';
        }
    } 
    else {
        returnHeading = 'Invalid format';
    } 
    console.log(returnHeading);
    return returnHeading;
}

module.exports = convert;