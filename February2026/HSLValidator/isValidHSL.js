//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-08
// Given a string, determine whether it is a valid CSS hsl() color value.
//     A valid HSL value must be in the format "hsl(h, s%, l%)", where:
//         h (hue) must be a number between 0 and 360 (inclusive).
//         s (saturation) must be a percentage between 0% and 100%.
//         l (lightness) must be a percentage between 0% and 100%.
//     Spaces are only allowed:
//         After the opening parenthesis
//         Before and/or after the commas
//         Before and/or after closing parenthesis
//     Optionally, the value can end with a semi-colon (";").
// For example, "hsl(240, 50%, 50%)" is a valid HSL value.

const isValidHSL = (hsl) => {
    const hslStarterRegex = /hsl\(/gm;
    const percentageRegex = /\d+%/gm
    const digitsRegex = /\d+/gm;
    let hslMatch = hsl.match(hslStarterRegex) || [];
    let correctNumberOfPercentages = hsl.match(percentageRegex) || [];
    let hslValues = hsl.match(digitsRegex) || [];

    if(hslMatch.length === 0){
        return false;
    }
    
    if (correctNumberOfPercentages.length !== 2) {
        return false;
    }
    
    if(hslValues[0] < 0 || hslValues[0] > 360){
        return false;
    }
    else if(hslValues[1] < 0 || hslValues[1] > 100) {
        return false;
    }
    else if(hslValues[2] < 0 || hslValues[2] > 100) {
        return false;
    }
    else{
        return true;
    }
}

module.exports = isValidHSL;