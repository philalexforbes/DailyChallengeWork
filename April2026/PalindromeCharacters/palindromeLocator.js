//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-07
// Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).
//     A palindrome is a string that is the same forward and backward.
//     If it's not a palindrome, return "none".

const palindromeLocator = (str) => {
    const midPoint = Math.floor(str.length / 2);
    const middleCharacters = str.length % 2 === 0 ? str[midPoint - 1] + str[midPoint] : str[midPoint];
    let firstHalf = str.split(middleCharacters)[0];
    let secondHalf = str.split(middleCharacters)[1];
    let newSecondHalf = ''
    for(let i = secondHalf.length - 1; i >= 0; i--){
        newSecondHalf = newSecondHalf + secondHalf[i];
    }
    if(firstHalf === newSecondHalf) {
        return middleCharacters;
    }
    else{
        return "none"
    }
}

module.exports = palindromeLocator;