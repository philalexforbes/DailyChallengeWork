//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-07
// Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.
//     Only consecutive duplicates are compressed.
//     Words are separated by single spaces.
// For example, given "yes yes yes please", return "yes(3) please".

function compressString(sentence) {
  let sentenceArray = sentence.split(' ');
  let multipleMatches;
  for(let i = 0; i < sentenceArray.length; i++) {
    multipleMatches = sentence.matchAll(sentenceArray[i]);
    multipleMatches = Array.from(multipleMatches);
    if(multipleMatches.length > 1) {
      sentence = sentence.replace(sentenceArray[i], `${sentenceArray[i]}(${multipleMatches.length})`);
      let regex = new RegExp('(?!' + sentenceArray[i] + '\\(\\d\\))(?:' + sentenceArray[i] + '\\s*)', 'gm');
      sentence = sentence.replaceAll(regex, '');
    }
  }
  return sentence.trim();
}

module.exports = compressString;