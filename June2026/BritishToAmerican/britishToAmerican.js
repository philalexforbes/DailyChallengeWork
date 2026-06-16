//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-16
// Given a sentence, convert any British English spellings to their American English equivalents using the following lookup table and return the updated sentence:
// British 	American
// "colour" 	"color"
// "flavour" 	"flavor"
// "honour" 	"honor"
// "neighbour" 	"neighbor"
// "labour" 	"labor"
// "humour" 	"humor"
// "centre" 	"center"
// "fibre" 	"fiber"
// "defence" 	"defense"
// "offence" 	"offense"
// "organise" 	"organize"
// "recognise" 	"recognize"
// "analyse" 	"analyze"

//     Replacements should be case-insensitive. For example, "Colour" should become "Color".
//     The input may contain words that build on the exact spelling of a root in the table that also need to be changed. 
//     For example, "colouring" should become "coloring", and "disorganised" should become "disorganized".

const britishToAmerican = (sentence) => {
    const britishSpellings = {
        "colour": "color",
        "flavour": "flavor",
        "honour": "honor",
        "neighbour": "neighbor",
        "labour": "labor",
        "humour": "humor",
        "centre": "center",
        "fibre": "fiber",
        "defence": "defense",
        "offence": "offense",
        "organise": "organize",
        "recognise": "recognize",
        "analyse": "analyze",
    }

    //this checks for captialization of the first letter if necessary
    sentence = sentence.split(' ');
    for(let i = 0; i < Object.keys(britishSpellings).length; i++) {
        let currentKey = Object.keys(britishSpellings)[i];
        for(let j = 0; j < sentence.length; j++) {
            let firstLetter = sentence[j][0];
            sentence[j] = sentence[j].replace(currentKey, britishSpellings[currentKey]);
            sentence[j] = firstLetter + sentence[j].substring(1);
        }
    }

    return sentence.join(' ');

    //this doesn't check for capitalization
    // for(let i = 0; i < Object.keys(britishSpellings).length; i++){
    //     let currentKey = Object.keys(britishSpellings)[i];
    //     sentence = sentence.replace(currentKey, britishSpellings[currentKey]);
    // }

    // return sentence;
}

module.exports = britishToAmerican;