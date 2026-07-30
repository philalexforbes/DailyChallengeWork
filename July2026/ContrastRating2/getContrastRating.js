//https://www.freecodecamp.org/learn/daily-coding-challenge/07-29
//Given two relative luminance values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:
// Calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.
// Return the rating based on the contrast ratio using the following table:
// Rating 	Normal Text 	Large Text
// "AAA" 	7.0+ 	4.5+
// "AA" 	4.5+ 	3.0+
// "Fail" 	below 4.5 	below 3.0

const getContrastRating = (l1, l2, isLargeText) => {
    l1 = l1 + .05;
    l2 = l2 + .05;

    const ratio = l1 > l2 ? (l1 / l2) : (l2 / l1);

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