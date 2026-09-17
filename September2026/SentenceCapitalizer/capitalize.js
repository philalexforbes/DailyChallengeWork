//https://www.freecodecamp.org/learn/daily-coding-challenge/09-16
// Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.
//     All other characters should be preserved.
//     Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).


const capitalize = (paragraph) => {
    const regexG = /^([a-z])|(?<=\.)[a-z]|(?<=\.\s)[a-z]|(?<=\!\s)([a-z])|(?<=\!)([a-z])|(?<=\?\s)[a-z]|(?<=\?)([a-z])/g;
    const regex = /^([a-z])|(?<=\.)[a-z]|(?<=\.\s)[a-z]|(?<=\!\s)([a-z])|(?<=\!)([a-z])|(?<=\?\s)[a-z]|(?<=\?)([a-z])/;
    let matches = paragraph.match(regexG);
    
    for(let i = 0; i < matches.length; i++) {
        paragraph = paragraph.replace(regex,matches[i].toUpperCase());
        console.log(paragraph);
    }
    return paragraph;
}

module.exports = capitalize;