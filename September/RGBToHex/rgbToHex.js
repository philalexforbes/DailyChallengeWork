//https://www.freecodecamp.org/learn/daily-coding-challenge/09-02
// Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.
// Here are some example outputs for a given input:
// Input 	Output
// "rgb(255, 255, 255)" 	"#ffffff"
// "rgb(1, 2, 3)" 	"#010203"

//     Make any letters lowercase.
//     Return a # followed by six characters. Don't use any shorthand values.

const rgbToHex = (rgb) => {
    let hex = '#';
    const regex = /\d+/gm;
    rgb = rgb.match(regex);
    for(let color in rgb){
        let convert = String(Number(rgb[color]).toString(16));
        convert = convert.length === 1 ? "0" + convert : convert;
        hex += convert;
    }
    return hex;
}

module.exports = rgbToHex;