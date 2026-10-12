//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-02
// Given a string containing balanced brackets, return the content of the deepest nested brackets.
//     Brackets can be any of the three types: (), [], and {}.
//     The input will always have a single deepest group.
// For example, given "(hello (world))", return "world".

const getDeepestBrackets = (str) => {
    const regex = /(?<=\{|\[|\()[a-zA-Z]+?(?=\}|\]|\))/gm;
    let matches = str.match(regex);
    if(matches.length === 1) {
        return matches[0];
    }
    console.log(matches);
    for(let i = 0; i < matches.length; i++) {
        let iRegex = new RegExp(`(?<=\\{|\\[|\\()${matches[i]}(?=\\}|\\]|\\))`, 'gm');
        let splitStr = str.split(iRegex);

        const endingsRegex = /\}|\]|\)/gm;
        const totalEndings = str.match(endingsRegex);
        const openingsRegex = /\{|\[|\(/gm;
        const totalOpenings = str.match(openingsRegex).length;;
        let openings = splitStr[0].match(openingsRegex) || [];
        let numberOfOpenings = openings.length;
        let endings = splitStr[0].match(endingsRegex) || [];
        let numberOfEndings = endings.length;
        if(numberOfEndings === 0 && numberOfOpenings <= (totalOpenings / 2)){
            return matches[matches.length-1]
        }
        else{
            return matches[0];
        }
    }

}

module.exports = getDeepestBrackets;