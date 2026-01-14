//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-14
// Given the string of a link in Markdown, return the equivalent HTML string.
// A Markdown image has the following format: "[link_text](link_url)". Return the string of the HTML a tag with the href set to the link_url and the link_text as the tag content.
// For example, given "[freeCodeCamp](https://freecodecamp.org/)" return '<a href="https://freecodecamp.org/">freeCodeCamp</a>';
// Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.

const parseLink = function(markdown) {
    const linkTextRegex = /\[[^[]*\]/gm;
    const linkRegex = /\(\S+\)/gm;
    let linkText = markdown.match(linkTextRegex);
    let link = markdown.match(linkRegex);
    linkText = linkText[0].replace('[', '');
    linkText = linkText.replace(']', '');
    link = link[0].replace('(', '');
    link = link.replace(')', '');
    return markdown = `<a href="${link}">${linkText}</a>`;
}

module.exports = parseLink;