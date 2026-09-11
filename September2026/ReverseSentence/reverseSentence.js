//https://www.freecodecamp.org/learn/daily-coding-challenge/09-11
// Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.
//     In the given string, words can be separated by one or more spaces.
//     The returned string should only have one space between words.

const reverseSentence = sentence => {
    sentence = sentence.split(' ');
    sentence = sentence.filter((word) => {
        return word !== '';
    });
    const newSentence = []
    for(let i = sentence.length - 1; i >= 0; i--){
        newSentence.push(sentence[i]);
    }
    return newSentence.join(' ');
}

module.exports = reverseSentence;