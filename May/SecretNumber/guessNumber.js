//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-25
// Given a secret number and a guess, determine if the guess is correct.
// Return:
//     "higher" if the secret number is higher than the guess.
//     "lower" if the secret number is lower than the guess.
//     "you got it!" if the guess is correct.

const guessNumber = (secret, guess) => {
    if(secret > guess) {
        return "higher";
    }
    else if(secret < guess) {
        return "lower";
    }
    else{
        return "you got it!";
    }
}

module.exports = guessNumber;