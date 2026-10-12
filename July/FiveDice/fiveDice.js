//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-11
// Given an array of five dice with values 1-6, return the best possible hand.

// Here are the hands ranked lowest to highest:
// Hand 	Description
// "no pair" 	No pair or better
// "pair" 	Two dice with the same value
// "two pair" 	Two different pairs
// "three of a kind" 	Three dice with the same value
// "small straight" 	Four consecutive values
// "large straight" 	Five consecutive values
// "full house" 	Three of a kind and a pair
// "four of a kind" 	Four dice with the same value
// "five of a kind" 	All five dice with the same value

const fiveDice = dice => {
    function uniqueValues (value, index, array) {
        return array.indexOf(value) === index;
    }

    dice.sort((a,b) => a - b);

    let areIncrementing = [];
    let increment = 1;
    for(let i = 0; i <= dice.length-1; i++){
        if(dice[i] + 1 === dice[i+1]){
            increment = increment + 1;
        }
        else {
            break;
        }
    }

    const uniqueDice = dice.filter(uniqueValues);
    let uniqueCounts = [];
    for(let i = 0; i < uniqueDice.length; i++){
        uniqueCounts.push(dice.filter(x => x === uniqueDice[i]).length);
    }
    uniqueCounts.sort((a,b) => b - a);

    const diceSequential = dice.reduce((acc, curr) => (acc ? (acc + 1 === curr ? curr : false) : false));

    if(uniqueCounts[0] === 5) {
        return "five of a kind";
    }
    else if (uniqueCounts[0] === 4){
        return "four of a kind";
    }
    else if(uniqueCounts[0] === 3 && uniqueCounts[1] === 2){
        return "full house";
    }
    else if(uniqueCounts[0] === 3){
        return "three of a kind";
    }
    else if(uniqueCounts[0] === 2 && uniqueCounts[1] === 2){
        return "two pair";
    }
    else if(uniqueCounts[0] === 2){
        return "pair";
    }
    else if(diceSequential){
        return "large straight";
    }
    else if(increment === 4){
        return "small straight"
    }
    else {
        return "no pair";
    }
}

module.exports = fiveDice;