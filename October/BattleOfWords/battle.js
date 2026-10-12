//https://www.freecodecamp.org/learn/daily-coding-challenge/10-12
// Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

//     The given sentences will always contain the same number of words.
//     Words are separated by a single space and will only contain letters.
//     The value of each word is the sum of its letters.
//     Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
//     A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
//     Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
//     A word wins if its value is greater than the opposing word's value.
//     The team with more winning words is the winner.

// Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.

const battle = (ourTeam, opponent) => {
    const values = [
        ' ','a','b','c','d','e','f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v',
        'w','x','y','z'
    ];
    ourTeam = ourTeam.split(' ');
    opponent = opponent.split(' ');
    let ourScore = 0;
    let opponentScore = 0;

    for(let i = 0; i < ourTeam.length; i++){
        let ourTempScore = 0;
        let opponentTempScore = 0;
        for(let j = 0; j < ourTeam[i].length; j++){
            let score = 0;
            if(values.indexOf(ourTeam[i][j]) === -1){
                score = values.indexOf(ourTeam[i][j].toLowerCase()) * 2;
            }
            else{
                score = values.indexOf(ourTeam[i][j]);
            }
            ourTempScore = score + ourTempScore;
        }
        for(let k = 0; k < opponent[i].length; k++) {
            let score = 0;
            if(values.indexOf(opponent[i][k]) === -1){
                score = values.indexOf(opponent[i][k].toLowerCase()) * 2;
            }
            else{
                score = values.indexOf(opponent[i][k]);
            }
            opponentTempScore = score + opponentTempScore;
        }
        if(ourTempScore > opponentTempScore){
            ourScore = ourScore + 1;
        }
        else if (opponentTempScore > ourTempScore) {
            opponentScore = opponentScore + 1;
        }
        else{
            ourScore = ourScore + 1;
            opponentScore = opponentScore + 1;
        }
    }

    if(ourScore > opponentScore) {
        return 'We win';
    }
    else if (ourScore < opponentScore) {
        return 'We lose';
    }
    else {
        return 'Draw';
    }
}

module.exports = battle;