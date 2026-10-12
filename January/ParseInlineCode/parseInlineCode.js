//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-21
// Given a string of Markdown that includes one or more inline code blocks, return the equivalent HTML string.
// Inline code blocks in Markdown use a single backtick (`) at the start and end of the code block text.
// Return the given string with all code blocks converted to HTML code tags.
// For example, given the string "Use `let` to declare the variable.", return "Use <code>let</code> to declare the variable.".
// Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

function parseInlineCode(markdown) {
    let matches = markdown.match(/`/gm);
    for (let i = 0; i < matches.length; i++) {
        markdown = i % 2 === 0 ? markdown.replace('`', '<code>') : markdown.replace('`', '</code>');
    }
    return markdown;
}

module.exports = parseInlineCode;