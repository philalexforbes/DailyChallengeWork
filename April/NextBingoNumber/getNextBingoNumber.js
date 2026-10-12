//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-09
// Given a bingo number, return the next bingo number sequentially.
// A bingo number is a single letter followed by a number in its range according to this chart:
// Letter 	Number Range
// "B" 	1-15
// "I" 	16-30
// "N" 	31-45
// "G" 	46-60
// "O" 	61-75
// For example, given "B10", return "B11", the next bingo number. If given the last bingo number, return "B1".

const getNextBingoNumber = (n) => {
    const regex = /\d+/gm;
    let number = Number(n.match(regex)[0]) + 1;
    if(number >= 1 && number <= 15) {
        return `B${number}`;
    }
    else if(number >= 16 && number <= 30){
        return `I${number}`;
    }
    else if(number >= 31 && number <= 45){
        return `N${number}`;
    }
    else if(number >= 46 && number <= 60){
        return `G${number}`;
    }
    else if(number >= 61 && number <= 75){
        return `O${number}`;
    }
    else if(number >= 76){
        return `B1`;
    }
}

module.exports = getNextBingoNumber;