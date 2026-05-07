//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-07
// Longest Common Substring
// Given a string, return the longest substring that appears more than once.
//     The substrings can overlap.

const getLongestSubstring = (str) => {
    let matches = [...str.matchAll(/(?=(.+)(?=.*\1))./g)].map(([_,v]) => v).filter((x, _, a) => !a.some((y) => x.length < y.length));
    if(matches.length !== 1) {
        if(matches[0].length === matches[matches.length -1].length){
            let reversedLast = matches[matches.length -1].split('').reverse().join('');
            if(matches[0] === reversedLast){
                return matches[0] + reversedLast[0];
            }
            else{
                return matches[0] + matches[matches.length -1].substring(1);
            }
        }
    }
    else{
        return matches[0];
    }
}

module.exports = getLongestSubstring;