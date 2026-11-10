//https://www.freecodecamp.org/learn/daily-coding-challenge/11-10
// Given a string representing a filename, return the extension of the file.
//     The extension is the part of the filename that comes after the last period (.).
//     If the filename does not contain a period or ends with a period, return "none".
//     The extension should be returned as-is, preserving case.

const getExtension = filename => {
    const split = filename.split('.');
    if(split[split.length-1] === filename || split[split.length-1] === ''){
        return 'none';
    }
    else {
        return split[split.length-1]
    }
}

module.exports = getExtension;