//https://www.freecodecamp.org/learn/daily-coding-challenge/07-23
// Given two equal length strings representing two players' strategies for a game, return the scores as an array [player1, player2].

//     The given strings will only contain one of two letters: "C" (cooperate) or "D" (defect).
//     Each character represents one round, scored as follows:
//         If both players cooperate, each scores 3.
//         If both players defect, each scores 1.
//         If one player defects and the other cooperates, the defector scores 5 and the cooperator scores 0.

const playGame = (player1, player2) => {
    const playerScores = [];
    let player1Score = 0;
    let player2Score = 0;

    for(let play = 0; play < player1.length; play++) {
        if((player1[play] === player2[play]) && (player1[play] === 'C')) {
            player1Score = player1Score + 3;
            player2Score = player2Score + 3;
        }
        else if((player1[play] === player2[play]) && (player1[play] === 'D')) {
            player1Score = player1Score + 1;
            player2Score = player2Score + 1;
        }
        else {
            if(player1[play] === 'C' && player2[play] === 'D'){
                player2Score = player2Score + 5;
            }
            else{
                player1Score = player1Score + 5;
            }
        }
    }
    playerScores.push(player1Score, player2Score);
    return playerScores;
}

module.exports = playGame;