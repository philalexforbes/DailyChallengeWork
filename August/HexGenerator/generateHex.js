//https://www.freecodecamp.org/learn/daily-coding-challenge/08-31
// Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

//     The function should handle "red", "green", or "blue" as an input argument.
//     If the input is not one of those, the function should return "Invalid color".
//     The function should return a random six-character hex color code where the input color value is greater than any of the others.
//     Example of valid outputs for a given input:

// Input 	Output
// "red" 	"FF0000"
// "green" 	"00FF00"
// "blue" 	"0000FF"

const generateHex = color => {
    const low = ['0','1','2','3'];
    const alph = ['a','b','c',];
    if(color === 'red') {
        let value = 'FF'
        value = value + low[Math.floor(Math.random()*low.length)];
        value = value + alph[Math.floor(Math.random()*alph.length)];
        value = value + low[Math.floor(Math.random()*low.length)];
        value = value + alph[Math.floor(Math.random()*alph.length)];
        return value;

    }
    else if(color === 'green') {
        let value = low[Math.floor(Math.random()*low.length)];
        value = value + alph[Math.floor(Math.random()*alph.length)];
        value = value + 'FF';
        value = value + low[Math.floor(Math.random()*low.length)];
        value = value + alph[Math.floor(Math.random()*alph.length)];
        return value;
    }
    else if(color === 'blue'){
        let value = low[Math.floor(Math.random()*low.length)];
        value = value + alph[Math.floor(Math.random()*alph.length)];
        value = value + low[Math.floor(Math.random()*low.length)];
        value = value + alph[Math.floor(Math.random()*alph.length)];
        value = value + 'FF';
        return value;
    }
    else{
        return 'Invalid color';
    }

}

module.exports = generateHex;