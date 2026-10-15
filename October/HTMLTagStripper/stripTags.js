//https://www.freecodecamp.org/learn/daily-coding-challenge/10-15
// Given a string of HTML code, remove the tags and return the plain text content.

//     The input string will contain only valid HTML.
//     HTML tags may be nested.
//     Remove the tags and any attributes.

// For example, '<a href="#">Click here</a>' should return "Click here".

const stripTags = html => {
    const regex = /(?<=[\>])[^<][a-zA-Z\s]*/gm;
    const matches = html.match(regex) || [];
    return matches.join('');
}

module.exports = stripTags;