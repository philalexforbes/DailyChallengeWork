//https://www.freecodecamp.org/learn/daily-coding-challenge/11-28
// Given two strings of the same length, a secret word and a guess, compare the guess to the secret word using the following rules:

//     The secret word and guess will only consist of uppercase letters ("A" to "Z");
//     For each letter in the guess, replace it with a number according to how it matches the secret word:
//         "2" if the letter is in the secret word and in the correct position.
//         "1" if the letter is in the secret word but in the wrong position.
//         "0" if the letter is not in the secret word.
//     Each letter in the secret word can be used at most once.
//     Exact matches ("2") are assigned first, then partial matches ("1") are assigned from left to right for remaining letters.
//     If a letter occurs multiple times in the guess, it can only match as many times as it appears in the secret word.

// For example, given a secret word of "APPLE" and a guess of "POPPA", return "10201":
// The first "P" is not in the correct location ("1"), the "O" isn't in the secret word ("0"), the second "P" is in the correct location ("2"), the third "P" is a zero ("0") 
// because the two "P"'s in the secret word have been used, and the "A" is not in the correct location ("1").

const compare = (word, guess) => {
    let matches = [];
    const map = new Map();

    for(let i = 0; i < word.length; i++) {
        const regex = new RegExp(`[${guess[i]}]`, 'gm');
        const regex1 = new RegExp(`[${word[i]}]`, 'gm');

        if(map.has(guess[i])){
            let value = map.get(guess[i]) + 1;
            map.set(guess[i], value);
        }
        else {
            map.set(guess[i], 1);
        }

        let guessCount = guess.match(regex) || [];
        guessCount = guessCount.length;
        let wordCount = word.match(regex) || [];
        wordCount = wordCount.length;
        
        if(word[i] === guess[i]){
            matches.push('2');
        }
        else if((word.includes(guess[i]) && map.get(guess[i]) <= wordCount)){
            matches.push('1');
        }
        else if((word.includes(guess[i]) && map.get(word[i]) <= guessCount)){
            matches.push('1');
        }      
        else {
            matches.push('0');
        }

        if(word[i] === guess[i] && map.get(guess[i]) > wordCount){
            let index = guess.indexOf(word[i]);
            matches[index] = '0';
        }
    }

    return matches.join('');
}

module.exports = compare;