//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-31
// Markdown Italic Parser
// Given a string that may include some italic text in Markdown, return the equivalent HTML string.
//     Italic text in Markdown is any text that starts and ends with a single asterisk (*) or a single underscore (_).
//     There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.
//     Convert all italic occurrences to HTML i tags and return the string.
// For example, given "*This is italic*", return "<i>This is italic</i>".
// Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

function parseItalics(markdown) {
    const regex = /(^\*[A-Za-z0-9\s]+[^\s]\*$)|(^_\w+.*_$)|(\*(?!\s)\w+(?!\s)\*)|(_\w+_)/gm;
    let isTheStringItalics = markdown.match(regex) || [];
    if (isTheStringItalics.length > 0) {
        for(let i =0; i < isTheStringItalics.length; i++) {
            if(isTheStringItalics[i].includes('*')){
                markdown = markdown.replace('*', '<i>');
                markdown = markdown.replace('*', '</i>');
            }
            else if(isTheStringItalics[i].includes('_')){
                markdown = markdown.replace('_', '<i>');
                markdown = markdown.replace('_', '</i>');
            }
        }
    }
    return markdown;
}

module.exports = parseItalics;