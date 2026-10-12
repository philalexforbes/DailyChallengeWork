//https://www.freecodecamp.org/learn/daily-coding-challenge/07-28
// Given a contrast ratio and a boolean indicating whether the text is large, return the WCAG rating using the following table:
// Rating 	Normal Text 	Large Text
// "AAA" 	7.0+ 	4.5+
// "AA" 	4.5+ 	3.0+
// "Fail" 	below 4.5 	below 3.0

const getContrastRating = (ratio, isLargeText) => {
    ratio = Number(ratio);

    if(isLargeText) {
        if(ratio >= 4.5) {
            return "AAA";
        }
        else if(ratio >= 3) {
            return "AA";
        }
        else {
            return "Fail";
        }
    }
    else {
        if(ratio >= 7) {
            return "AAA";
        }
        else if(ratio >= 4.5) {
            return "AA";
        }
        else{
            return "Fail";
        }
    }
}

module.exports = getContrastRating;