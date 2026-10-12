//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-15
// Given a ski hill's vertical drop, horizontal distance, and type, determine the difficulty rating of the hill.
// To determine the rating:
//     Calculate the steepness of the hill by taking the drop divided by the distance.
//     Then, calculate the adjusted steepness based on the hill type:
//         "Downhill" multiply steepness by 1.2
//         "Slalom": multiply steepness by 0.9
//         "Giant Slalom": multiply steepness by 1.0
// Return:
//     "Green" if the adjusted steepness is less than or equal to 0.1
//     "Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
//     "Black" if the adjusted steepness is greater than 0.25

const getHillRating = (drop, distance, type) => {
    let steepnessMultiplier = 0;
    let steepness = drop / distance;

    if(type === 'Downhill') {
        steepnessMultiplier = 1.2;
    }
    else if(type === 'Giant Slalom') {
        steepnessMultiplier = 1.0;
    }
    else if(type === 'Slalom'){
        steepnessMultiplier = 0.9;
    }

    steepness = steepness * steepnessMultiplier;

    if(steepness <= 0.1){
        return 'Green';
    }
    else if(steepness > 0.1 && steepness <= 0.25){
        return 'Blue';
    }
    else if(steepness > 0.25){
        return 'Black';
    }
}

module.exports = getHillRating;