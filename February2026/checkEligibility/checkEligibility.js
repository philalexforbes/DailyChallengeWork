//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-17
// Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.
//     The length of the array determines the team size: 1, 2 or 4 person teams.
//     All given weight values are in kilograms (kg).
// The bobsled (sled by iteself) must have a minimum weight of:
//     162 kg for a 1-person team
//     170 kg for a 2-person team
//     210 kg for a 4-person team
// The total weight of the bobsled (athletes plus sled) must not exceed:
//     247 kg for a 1-person team
//     390 kg for a 2-person team
//     630 kg for a 4-person team
// Return "Eligible" if the team meets all the requirements, or "Not Eligible" if the team fails to meet one or more of the requirements.



const checkEligibility = (athleteWeights, sledWeight) => {
    let totalAthleteWeight = athleteWeights.reduce((sum, current) => sum + current, 0);
    let numberOfAtheletes = athleteWeights.length;
    let sledEligible;

    let totalWeight = totalAthleteWeight + sledWeight;

    if(numberOfAtheletes === 1 && sledWeight >= 162 && totalWeight <= 247){
        sledEligible = true;
    }
    else if(numberOfAtheletes === 2 && sledWeight >= 170 && totalWeight <= 390){
        sledEligible = true;
    }
    else if(numberOfAtheletes === 4 && sledWeight >= 210 && totalWeight <= 630){
        sledEligible = true;
    }
    else{
        sledEligible = false;
    }
    
    return sledEligible ? 'Eligible' : 'Not Eligible';
}

module.exports = checkEligibility;