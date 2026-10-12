//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-27
// Given a string, return a new string that is truncated so that the total width of the characters does not exceed 50 units.
// Each character has a specific width:
// Letters 	Width
// "ilI" 	1
// "fjrt" 	2
// "abcdeghkmnopqrstuvwxyzJL" 	3
// "ABCDEFGHKMNOPQRSTUVWXYZ" 	4
// The table above includes all upper and lower case letters. Additionally:
//     Spaces (" ") have a width of 2
//     Periods (".") have a width of 1
//     If the given string is 50 units or less, return the string as-is, otherwise
//     Truncate the string and add three periods at the end ("...") so it's total width, including the three periods, 
//     is as close as possible to 60 units without going over.

const truncateText = (str) => {
    let numberOfUnits = 0;
    let widthOf1 = 'ilI.'.split('');
    let widthOf2 = 'fjrt '.split('');
    let widthOf3 = 'abcdeghkmnopqrstuvwxyzJL'.split('');
    let widthOf4 = 'ABCDEFGHKMNOPQRSTUVWXYZ'.split('');
    let returnStr = '';

    for(let i = 0; i < str.length; i++) {
        if(str[i+1] === undefined){

        }
        else if(numberOfUnits + 3 >= 48) {
            returnStr = returnStr + '...';
            break;
        }
        if(widthOf1.indexOf(str[i]) !== -1) {
            if(numberOfUnits + 1 > 50){
                returnStr = returnStr + '...';
                break;
            }
            else if(numberOfUnits + 1 === 50) {
                numberOfUnits = numberOfUnits + 1;
                returnStr = returnStr + str[i] + '...';
                break;
            }
            else {
                numberOfUnits = numberOfUnits + 1;
                returnStr = returnStr + str[i];
            }  
        }
        else if(widthOf2.indexOf(str[i]) !== -1 ) {
            if(numberOfUnits + 2 > 50){
                returnStr = returnStr + '...';
                break;
            }
            else if(numberOfUnits + 2 === 50) {
                numberOfUnits = numberOfUnits + 2;
                returnStr = returnStr + str[i] + '...';
                break;
            }
            else {
                numberOfUnits = numberOfUnits + 2;
                returnStr = returnStr + str[i];
            }
        }
        else if(widthOf3.indexOf(str[i]) !== -1 ) {
            if(numberOfUnits + 3 > 50){
                returnStr = returnStr + '...';
                break;
            }
            else if(numberOfUnits + 3 === 50) {
                numberOfUnits = numberOfUnits + 3;
                returnStr = returnStr + str[i] + '...';
                break;
            }
            else {
                numberOfUnits = numberOfUnits + 3;
                returnStr = returnStr + str[i];
            }
        }
        else if(widthOf4.indexOf(str[i]) !== -1) {
            if(numberOfUnits + 4 > 50 || numberOfUnits + 4 >= 48){
                returnStr = returnStr + '...';
                break;
            }
            else if(numberOfUnits + 4 === 50) {
                numberOfUnits = numberOfUnits + 4;
                returnStr = returnStr + str[i] + '...';
                break;
            }
            else {
                numberOfUnits = numberOfUnits + 4;
                returnStr = returnStr + str[i];
            }
        }
    }

    return returnStr;
}

module.exports = truncateText;