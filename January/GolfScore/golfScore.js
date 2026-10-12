//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-11
// Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.
// Return:
//     "Hole in one!" if it took one stroke.
//     "Eagle" if it took two strokes less than par.
//     "Birdie" if it took one stroke less than par.
//     "Par" if it took the same number of strokes as par.
//     "Bogey" if it took one stroke more than par.
//     "Double bogey" if took two strokes more than par.

function golfScore(par, strokes) {
    let difference = strokes - par;
    let scoreTerm = '';

    if(strokes === 1) {
        scoreTerm = 'Hole in one!';
    }
    else if(difference === 0) {
        scoreTerm = 'Par';
    }
    else if(difference === -1){
        scoreTerm = 'Birdie';
    }
    else if(difference === -2){
        scoreTerm = 'Eagle'
    }
    else if(difference === 1) {
        scoreTerm = 'Bogey';
    }
    else if(difference === 2) {
        scoreTerm = 'Double bogey';
    }

    return scoreTerm;
}

module.exports = golfScore;