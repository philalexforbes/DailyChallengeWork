//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-11
//Given a string of words, return a new string where each word is replaced by its length.
//     Words in the given string will be separated by a single space
//     Keep the spaces in the returned string.
// For example, given "hello world", return "5 5".

const convertWords = (str) => {
    str = str.split(' ');
    let strSizes = '';
    str.forEach((split) => strSizes += split.length + ' ');
    return strSizes.trimEnd(); //using the trim end to remove the last space since we are not using a standard for loop above with a conditional for the last item to not have a space
}

module.exports = convertWords;