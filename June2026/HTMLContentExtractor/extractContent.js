//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-12
// Given a string of HTML, return the plain text content with all tags removed.

const extractContent = (html) => {
    const regex = />\s*(.*?)\s*</gm;
    const textArray = html.match(regex);
    const text = textArray.map((item) => item.replace('>','').replace('<',''))
    return text.join('');
}

module.exports = extractContent;