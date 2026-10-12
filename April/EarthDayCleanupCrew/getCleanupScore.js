//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-22
// Today is Earth Day. Given an array of items you cleaned up, return your total cleanup score based on the rules below.
// Given items will be one of:
// Item 	Base Value
// "bottle" 	10
// "can" 	6
// "bag" 	8
// "tire" 	35
// "straw" 	4
// "cardboard" 	3
// "newspaper" 	3
// "shoe" 	12
// "electronics" 	25
// "battery" 	18
// "mattress" 	38
// A Rare item is represented as ["rare", value]. For example, ["rare", 80]. Rare items do not get a streak bonus.
//     Streak bonus: If the same item appears consecutively, it gets increasing bonus points.
//         First consecutive occurrence: base value
//         Second: base value + 1
//         Third: base value + 2
//         etc.
//     Fifth Item Multiplier: Every fifth item collected gets a multiplier.
//         Fifth item: *2
//         Tenth item: *3
//         etc.
//     Apply the multiplier after calculating any bonuses.

const getCleanupScore = (items) => {
    const values = {
        bottle: 10,
        can: 6,
        bag: 8,
        tire: 35,
        straw: 4,
        cardboard: 3,
        newspaper: 3,
        shoe: 12,
        electronics: 25,
        battery: 18,
        mattress: 38,
    }
    let score = 0;
    let previousItem = '';
    let streakBonus = 0;
    let multiplier = 2;

    for(let i =0; i < items.length; i++){
        let value;
        if(typeof items[i] === 'string'){
            value = values[items[i]]; //set initial item value
            //if the previous item is equal to the current item we add the streak
            if(previousItem === items[i]){
                streakBonus = streakBonus + 1;
                value = value + streakBonus;
            } else{
                //if not we need to reset the streak bonus
                streakBonus = 0;
            }
            //if the current item is a multiple of 5 we multiply its value by the multiplier and increment the multiplier just in case another multiple of 5 shows up
            if((i+1) % 5 === 0){
                value = value * multiplier;
                multiplier = multiplier + 1;
            }
            score = score + value;
            previousItem = items[i];
        }
        else{
            value = items[i][1]
            previousItem = ''; // previous value must be reset here
            streakBonus = 0; // rare does not qualify for streak bonus and it is not stated but assumed that multiplier as well but I added the code just in case
            if((i+1) % 5 === 0){
                value = value * multiplier;
                multiplier = multiplier + 1;
            }
            score = score + value;
        }
    }
    return score;
}

module.exports = getCleanupScore;