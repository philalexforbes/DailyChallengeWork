//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-05
//Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).
//     There will always be at least one pair of matching characters.
//     The returned substring should exclude the matching characters.
//     If two or more gaps are the same length, return the characters from the first one.
// For example, given "ABCDAC", return "DA".
//     Only "A" and "C" repeat in the string.
//     The number of characters between the two "A" characters is 3, and between the "C" characters is 2.
//     So return the string between the two "C" characters.

const smallestGap = (str) => {
    let gapCharacters = [];
    let duplicateCharacters = [];
    let spaceBetweenDuplicates = [];
    let dupSpaceBetween = [];
    for(let i = 0; i < str.length; i++) {
        let tempString = str.slice(i+1);
        let nextMatch;
        if(str[i] !== '*' && str[i] !== '(' && str[i] !== '+' && str[i] !== '|' && str[i] !== '^') {
            nextMatch = tempString.search(str[i]);
        } else {
            nextMatch = -1;
        }
        if(nextMatch !== -1){
            duplicateCharacters.push(str[i]);
            let charactersBetween = str.substring(i+1, i+nextMatch+1);
            console.log(str[i]);
            console.log(charactersBetween);
            gapCharacters.push(charactersBetween);
            spaceBetweenDuplicates.push(charactersBetween.length);
            dupSpaceBetween.push(charactersBetween.length);
        }        
    }
    dupSpaceBetween.sort((a, b) => a - b);
    console.log(duplicateCharacters);
    console.log(gapCharacters);
    let lowestSpace = spaceBetweenDuplicates.indexOf(dupSpaceBetween[0]);
    return gapCharacters[lowestSpace];
}

module.exports = smallestGap;