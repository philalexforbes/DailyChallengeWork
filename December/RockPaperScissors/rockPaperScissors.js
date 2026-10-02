//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-27
// Given two strings, the first representing Player 1 and the second representing Player 2, determine the winner of a match of Rock, Paper, Scissors.
//     The input strings will always be "Rock", "Paper", or "Scissors".
//     "Rock" beats "Scissors".
//     "Paper" beats "Rock".
//     "Scissors" beats "Paper".
// Return:
//     "Player 1 wins" if Player 1 wins.
//     "Player 2 wins" if Player 2 wins.
//     "Tie" if both players choose the same option.

function rockPaperScissors(player1, player2) {
  let outcome = '';
  if(player1 === 'Rock' && player2 === 'Scissors') {
    outcome = 'Player 1 wins';
  }
  else if(player1 === 'Rock' && player2 === 'Paper') {
    outcome = 'Player 2 wins';
  }
  else if(player1 === 'Paper' && player2 === 'Scissors') {
    outcome = 'Player 2 wins';
  }
  else if(player1 === 'Paper' && player2 === 'Rock') {
    outcome = 'Player 1 wins';
  }
  else if(player1 === 'Scissors' && player2 === 'Paper') {
    outcome = 'Player 1 wins';
  }
  else if(player1 === 'Scissors' && player2 === 'Rock') {
    outcome = 'Player 2 wins';
  }
  else{
    outcome = 'Tie';
  }

  return outcome;
}

module.exports = rockPaperScissors;