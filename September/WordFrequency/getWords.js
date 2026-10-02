//https://www.freecodecamp.org/learn/daily-coding-challenge/09-14
// Given a paragraph, return an array of the three most frequently occurring words.
//     Words in the paragraph will be separated by spaces.
//     Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
//     Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
//     The returned array should have all lowercase words.
//     The returned array should be in descending order with the most frequently occurring word first.

const getWords = paragraph => {
    const regex = /\w+/gm;

    paragraph = paragraph.match(regex);

    const words = new Map();

    for(let i = 0; i < paragraph.length; i++) {
        let word = paragraph[i].toLowerCase();
        if(!words.has(word)){
            words.set(word, 1)
        }
        else{
            let count = words.get(word);
            count = count + 1;
            words.set(word, count);
        }
    }
    const sortedWords = Array.from(words).sort((a,b) => b[1] - a[1]);
    const topWords = [sortedWords[0][0], sortedWords[1][0], sortedWords[2][0]];
    return topWords;
}

module.exports = getWords;