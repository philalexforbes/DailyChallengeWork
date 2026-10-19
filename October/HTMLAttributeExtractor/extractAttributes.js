//https://www.freecodecamp.org/learn/daily-coding-challenge/10-19
// You will only be given one element.
// Attributes will be in the format: attribute="value".
// Return an array of strings with each attribute property and value, separated by a comma, in this format: ["attribute1, value1", "attribute2, value2"].
// Return attributes in the order they are given.
// If no attributes are found, return an empty array.

const extractAttributes = element => {
    const regex = /(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?/gm;
    element = element.match(regex) || [];
    let attributes = [];
    for(let i = 0; i < element.length; i++){
        let attribute = element[i].split('=');
        attributes.push(`${attribute[0]}, ${attribute[1].replaceAll('"','')}`);
    }
    return attributes;
}

module.exports = extractAttributes;