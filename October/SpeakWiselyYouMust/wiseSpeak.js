//https://www.freecodecamp.org/learn/daily-coding-challenge/10-22
// Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

//     Words are separated by a single space.
//     Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
//     Move all words before and including that word to the end of the sentence and:
//         Preserve the order of the words when you move them.
//         Make them all lowercase.
//         And add a comma and space before them.
//     Capitalize the first letter of the new first word of the sentence.
//     All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
//     Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.

// For example, given "You must speak wisely." return "Speak wisely, you must."

const wiseSpeak = sentence => {
    const words = ["have", "must", "are", "will", "can"];
    let newSentence = '';

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        if(sentence.includes(word)) {
            sentence = sentence.split(word);
            sentence[1] = sentence[1].trim();
            sentence[0] = sentence[0].trim();
            let punctuation = sentence[1][sentence[1].length -1];
            newSentence = newSentence + sentence[1][0].toUpperCase() + sentence[1].slice(1, sentence[1].length - 1) + ', ' + sentence[0][0].toLowerCase() + sentence[0].slice(1) + ' ' +word + punctuation;
            break;
        }
    }
    return newSentence;
}

module.exports = wiseSpeak;