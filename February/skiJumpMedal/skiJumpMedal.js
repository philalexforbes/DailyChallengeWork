//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-09
// Given distance points, style points, a wind compensation value, and K-point bonus value, calculate your score for the ski jump and determine if you won a medal or not.
//     Your score is calculated by summing the above four values.
// The current total scores of the other jumpers are:
// 165.5
// 172.0
// 158.0
// 180.0
// 169.5
// 175.0
// 162.0
// 170.0
//     If your score is the best, return "Gold"
//     If it's second best, return "Silver"
//     If it's third best, return "Bronze"
//     Otherwise, return "No Medal"

const skiJumpMedal = (distancePoints, stylePoints, windComp, kPointBonus) => {
    const scores = [
        165.5,
        172.0,
        158.0,
        180.0,
        169.5,
        175.0,
        162.0,
        170.0
    ]
    scores.sort((a,b) => a > b ? -1 : 1);
    let score = distancePoints + stylePoints + windComp + kPointBonus;

    if(score > scores[0]) {
        return "Gold";
    }
    else if(score > scores[1] && score < scores[0]) {
        return "Silver";
    }
    else if(score > scores[2] && score < scores[1]) {
        return "Bronze";
    }
    else {
        return "No Medal";
    }

}

module.exports = skiJumpMedal;