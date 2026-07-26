//https://www.freecodecamp.org/learn/daily-coding-challenge/07-26
// Given two strings of equal length, return the sum of the shortest distances between each pair of characters.
//     The input will only contain lowercase letters
//     The alphabet is treated as a circle, so the distance between a and z is 1.

const letterDistance = (str1, str2) => {
    const letters = 
        [   'a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n',
            'o', 'p', 'q', 'r', 's', 't', 'u',
            'v', 'w', 'x', 'y', 'z',
        ];

    let distance = 0;
    for(let i = 0; i < str1.length; i++){
        let str1Index = letters.indexOf(str1[i]) + 1;
        let str2Index = letters.indexOf(str2[i]) + 1;
        let currDis = Math.abs(str2Index - str1Index);
        if(currDis >= 16) {
            currDis = str1Index - str2Index >= 16 ? Math.abs(str1Index - (str2Index + 26)) : Math.abs(str2Index - (str1Index + 26));
        }
        distance = currDis  + distance;
    }
    return distance;
}

module.exports = letterDistance;