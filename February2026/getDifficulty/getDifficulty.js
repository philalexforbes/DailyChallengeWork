//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-14
// Given a string representing the curves on a skeleton track, determine the difficulty of the track.
//     The given string will only consist of the letters:
//         "L" for a left turn
//         "R" for a right turn
//         "S" for a straight segment
//     Each direction change adds 15 points (an "L" followed by an "R" or vice versa).
//     All other curves add 5 points each (all other "L" or "R" characters).
//     Straight segments add 0 points.
// The difficulty of the track is based on the total score. Return:
//     "Easy" if the total is 0 - 100
//     "Medium" if the total is 101-200
//     "Hard" if the total is over 200

const getDifficulty = function(track) {
    track = track.split('');
    let score = 0;
    for(let i = 0; i < track.length; i++) {
        if((track[i] === 'L' && i === 0) || (track[i] === 'R' && i === 0)) {
            score += 5;
        }
        else if((track[i] === 'L' && track[i-1] === 'L') || (track[i] === 'R' && track[i-1] === 'R')){
            score += 5;
        }
        else if((track[i] === 'L' && track[i-1] === 'S') || (track[i] === 'R' && track[i-1] === 'S')){
            score += 5;
        }
        else if((track[i] === 'L' && track[i-1] === 'R' || track[i] === 'R' && track[i-1] === 'L')) {
            score += 15;
        }
        else {
            score += 0;
        }
    }
    if (score >= 0 && score <= 100) {
        return 'Easy';
    }
    else if(score >= 101 && score <= 200) {
        return 'Medium';
    }
    else {
        return 'Hard';
    }
}

module.exports = getDifficulty;