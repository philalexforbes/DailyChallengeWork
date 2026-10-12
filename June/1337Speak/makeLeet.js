//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-22
// Given a lowercase string, return it translated into leet speak by replacing the letters below with their leet substitutions:
// Letter 	Leet
// a 	4
// e 	3
// g 	9
// i 	1
// l 	1
// o 	0
// s 	5
// t 	7
//     Characters with no substitution are left unchanged.

const makeLeet = (str) => {
    const leet = {
        'a': 4,
        'e': 3,
        'g': 9,
        'i': 1,
        'l': 1,
        'o': 0,
        's': 5,
        't': 7,
    }
    str = str.split('');
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < Object.keys(leet).length; j++) {
            if (str[i] === Object.keys(leet)[j]) {
                str[i] = leet[str[i]];
            }
        }
    }
    return str.join('');
}

module.exports = makeLeet;