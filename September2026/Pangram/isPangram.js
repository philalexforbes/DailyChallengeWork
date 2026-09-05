//https://www.freecodecamp.org/learn/daily-coding-challenge/09-03
// Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

//     Ignore non-alphabetical characters in the word or sentence.
//     Ignore letter casing in the word or sentence.

const isPangram = (sentence, letters) => {
    const regex = /\!|\./gm
    sentence = sentence.toLowerCase();
    sentence = sentence.split(' ');
    sentence = sentence.join('');
    sentence = sentence.replace(regex,'')
    for(let i = 0; i < letters.length; i++){
        let index = sentence.indexOf(letters[i]);
        if(index === -1){
            return false;
        }
    }
    for(let i = 0; i < sentence.length; i++) {
        let index = letters.indexOf(sentence[i]);
        if(index === -1){
            return false;
        }
    }
    return true;
}

module.exports = isPangram;