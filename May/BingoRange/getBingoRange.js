//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-18
// Given a bingo letter, return the number range associated with that letter.
// Letter 	Number Range
// "B" 	1-15
// "I" 	16-30
// "N" 	31-45
// "G" 	46-60
// "O" 	61-75
// Return an array with all numbers in the range from smallest to largest.

const getBingoRange = (letter) => {
    const bingoLetters = {
        B: 1,
        I: 16,
        N: 31,
        G: 46,
        O: 61
    }
    let range = [];

    for(let i = 0; i < 15; i++){
        range.push(bingoLetters[letter] + i);
    }
    return range;
}

module.exports = getBingoRange;