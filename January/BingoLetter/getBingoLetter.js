//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-24
// Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:
// Letter 	Number Range
// "B" 	1-15
// "I" 	16-30
// "N" 	31-45
// "G" 	46-60
// "O" 	61-75

function getBingoLetter(n) {
    if(n >= 1 && n <= 15) {
        n = 'B';
    }
    else if(n >= 16 && n <= 30){
        n = 'I';
    }
    else if(n >= 31 && n <= 45){
        n = 'N';
    }
    else if(n >= 46 && n <= 60){
        n = 'G';
    }
    else if(n >= 61 && n <= 75){
        n = 'O';
    }
    else {
        n = 'Number is not within range!';
    }
    return n;
}

module.exports = getBingoLetter;