//https://www.freecodecamp.org/learn/daily-coding-challenge/08-24
// Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:
//     Characters a-z have a strength of 1-26, respectively.
//     Characters A-Z have a strength of 27-52, respectively.
//     Digits 0-9 have a strength of their face value.
//     All other characters have a value of zero.
//     Each character can only fight one battle.
// For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:
//     "Opponent retreated" if your army has more characters than the opposing army.
//     "We retreated" if the opposing army has more characters than yours.
//     "We won" if your army won more battles.
//     "We lost" if the opposing army won more battles.
//     "It was a tie" if both armies won the same number of battles.

const battle = (myArmy, opposingArmy) => {
    const values = [
        ' ','a','b','c','d','e','f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v',
        'w','x','y','z','A','B','C','D','E','F','G',
        'H','I','J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z'
    ];
    const numbers = ['0','1','2','3','4','5','6','7','8','9']
    let myArmySize = myArmy.length;
    let opposingArmySize = opposingArmy.length;
    let myVictories = 0;
    let opposingVictories = 0;
    if(myArmySize > opposingArmySize) {
        return 'Opponent retreated';
    }
    else if (opposingArmySize > myArmySize) {
        return 'We retreated';
    }
    else {
        myArmySize = 0;
        opposingArmySize = 0;
        myArmy = myArmy.split('');
        opposingArmy = opposingArmy.split('');
        for(let i = 0; i < myArmy.length; i++){
            if(values.indexOf(myArmy[i]) !== -1) {
                myArmySize = values.indexOf(myArmy[i]);
            }
            else if(numbers.indexOf(myArmy[i]) !== -1) {
                myArmySize = numbers.indexOf(myArmy[i]);
            }
            else {
                myArmySize = 0;
            }

            if(values.indexOf(opposingArmy[i]) !== -1) {
                opposingArmySize = values.indexOf(opposingArmy[i]);
            }
            else if(numbers.indexOf(opposingArmy[i]) !== -1) {
                opposingArmySize = numbers.indexOf(opposingArmy[i]);
            }
            else {
                opposingArmySize = 0
            }
            if(myArmySize > opposingArmySize){
                myVictories = myVictories + 1;
            }
            else if (myArmySize < opposingArmySize) {
                opposingVictories = opposingVictories + 1;
            }

        }

        if(myVictories > opposingVictories) {
            return 'We won';
        }
        else if(opposingVictories > myVictories) {
            return 'We lost';
        }
        else {
            return 'It was a tie';
        }
    }

}

module.exports = battle;