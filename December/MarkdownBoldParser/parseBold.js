//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-10
// Given a string that may include some bold text in Markdown, return the equivalent HTML string.
//     Bold text in Markdown is any text that starts and ends with two asterisks (**) or two underscores (__).
//     There cannot be any spaces between the text and the asterisks or underscores, but there can be spaces in the text itself.
//     Convert all bold occurrences to HTML b tags and return the string.
// For example, given "**This is bold**", return "<b>This is bold</b>".
// Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

function parseBold(markdown) {
    let regex = /(?<=\*\*)([^\s*][^*]*[^\s*])(?=\*\*)|(?<=__)([^\s_][^_]*[^\s_])(?=__)/gm;
    let matches = markdown.match(regex) || [];
    if(matches.length >= 1){
        for(let i =0; i < matches.length+1; i++){
            let j = i + 1;
            let boldType = j % 2 !== 0 ? '<b>' : '</b>';
            markdown = markdown.replace('**', boldType);
            markdown = markdown.replace('__', boldType);
        }
    }
    return markdown;
}

module.exports = parseBold;