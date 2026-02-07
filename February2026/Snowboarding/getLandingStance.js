//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-07
// Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.
//     A snowboarder's stance is either "Regular" or "Goofy".
//     Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
//     The landing stance flips every 180 degrees of rotation.
// For example, given "Regular" and 90, return "Regular". Given "Regular" and 180 degrees, return "Goofy".

function getLandingStance(startStance, rotation) {
    rotation = rotation / 180;
    if(rotation % 2 !== 0 && rotation !== 0.5) {
        if(startStance === 'Regular') {
            startStance = 'Goofy';
        } else {
            startStance = 'Regular';
        }
    }
    return startStance;
}

module.exports = getLandingStance;