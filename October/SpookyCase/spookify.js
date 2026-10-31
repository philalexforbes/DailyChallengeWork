//https://www.freecodecamp.org/learn/daily-coding-challenge/10-31
// Given a string representing a variable name, convert it to "spooky case" using the following constraints:
//     Replace all underscores (_), and hyphens (-) with a tilde (~).
//     Capitalize the first letter of the string, and every other letter after that. 
//     Ignore the tilde character when counting. Make all other letters lowercase.
// For example, given hello_world, return HeLlO~wOrLd.

const spookify = boo => {
    const regex = /[\-\_]/gm;
    boo = boo.replaceAll(regex, '~');
    let newBoo = '';
    let capitalized = false;
    for(let i = 0; i < boo.length; i++) {
        if(boo[i] !== '~'){
            if(!capitalized) {
                newBoo = newBoo + boo[i].toUpperCase();
                capitalized = true;
            }
            else {
                newBoo = newBoo + boo[i].toLowerCase();
                capitalized = false;
            }
        }
        else {
            newBoo = newBoo + boo[i];
        }
    }
    return newBoo;
}

module.exports = spookify;