//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-25
// Snowflake Generator
// Given a multi-line string that uses newline characters (\n) to represent a line break, return a new string where each line is mirrored horizontally and attached to the end of the original line.
//     Mirror a line by reversing all of its characters, including spaces.
// For example, given "* \n *\n* ", which logs to the console as:
// * 
//  *
// * 
// Return "*  *\n ** \n*  *", which logs to the console as:
// *  *
//  ** 
// *  *
// Take careful note of the whitespaces in the given and returned strings. Be sure not to trim any of them.

function generateSnowflake(crystals) {
    let newCrystalsArray = crystals.split(/(\n)/);
    let newCrystals = [];
    for (let i =0; i< newCrystalsArray.length ;i++){
        let newCrystal = newCrystalsArray[i].split('').reverse().join('');
        if(!newCrystalsArray[i].includes('\n')){
            newCrystals += newCrystalsArray[i] + newCrystal;
        }
        else {
            newCrystals += newCrystalsArray[i];
        }
        
    }
    return newCrystals;
}

module.exports = generateSnowflake;