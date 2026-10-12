//https://www.freecodecamp.org/learn/daily-coding-challenge/08-16
// Given two strings, determine if they are anagrams of each other (contain the same characters in any order).
//     Ignore casing and white space.

const areAnagrams = (str1, str2) => {
    str1 = str1.replaceAll(' ','').split('');
    str2 = str2.replaceAll(' ', '').split('');
    for(let i = 0; i< str1.length; i++){
        str1[i] = str1[i].toLowerCase();
        str2[i] = str2[i].toLowerCase()
    }
    str1.join('');
    str2.join('');
    for(let s = 0; s < str1.length; s++){
        if(!str2.includes(str1[s])) {
            return false;
        }
    }
    return true;
}

module.exports = areAnagrams;