//https://www.freecodecamp.org/learn/daily-coding-challenge/08-25
//Given a string, return its camel case version using the following rules:
// Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
// The first word should be all lowercase.
// Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
// All spaces and separators should be removed.


const toCamelCase = s => {
    const regex = /[-_]/gm;
    s = s.replaceAll(regex, ' ');
    s = s.split(' ');
    let string = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ' '){
            for(let k = 0; k < s[i].length; k++) {
                if(i > 0 && k < 1) {
                    string = string + s[i][k].toUpperCase();
                }
                else {
                    string = string + s[i][k].toLowerCase();
                }
            }
        }
    }
    return string;
}

module.exports = toCamelCase;