//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-03
//Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.

const mirror = (str) => {
    let length = str.length;
    while(length > 0) {
        str += str[length-1];
        length -= 1;
    }
    return str;
}

module.exports =mirror ;