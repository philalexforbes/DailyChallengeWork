//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-01
// Given a string of a person's first and last name, calculate their lucky number using the following rules:
//     First and last names are separated by a space
//     Find the vowel and consonant count for each name
//     Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
//     Do the same for the two larger counts and the larger name
//     Subtract the smaller value from the larger one to get their lucky number
// If the final value is zero (0), return 13.

const getLuckyNumber = name => {
    const vowelRegex = /[AEIOUaeiou]/gm;
    const consonateRegex = /[^AEIOUaeiou]/gm;
    name = name.split(' ');
    const consonateCountFirst = name[0].match(consonateRegex).length;
    const consonateCountLast = name[1].match(consonateRegex).length;
    const vowelCountFirst = name[0].match(vowelRegex).length;
    const vowelCountLast = name[1].match(vowelRegex).length;
    let largerConsonateCount, smallerConsonateCount, largerVowelCount, smallerVowelCount, smallerName, largerName;

    if(name[0].length > name[1].length) {
        largerName = name[0].length;
        smallerName = name[1].length;
    }
    else {
        largerName = name[1].length;
        smallerName = name[0].length;
    }

    if(consonateCountFirst > consonateCountLast) {
        largerConsonateCount = consonateCountFirst;
        smallerConsonateCount = consonateCountLast;
    }
    else {
        largerConsonateCount = consonateCountLast;
        smallerConsonateCount = consonateCountFirst;
    }

    if(vowelCountFirst > vowelCountLast) {
        largerVowelCount = vowelCountFirst;
        smallerVowelCount = vowelCountLast;
    }
    else {
        largerVowelCount = vowelCountLast;
        smallerVowelCount = vowelCountFirst;
    }

    const smallerValue = (smallerVowelCount * smallerConsonateCount) * smallerName;
    const largerValue = (largerVowelCount * largerConsonateCount) * largerName;

    return largerValue - smallerValue !== 0 ? largerValue - smallerValue : 13;

}

module.exports = getLuckyNumber;