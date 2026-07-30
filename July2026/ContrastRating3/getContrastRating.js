//https://www.freecodecamp.org/learn/daily-coding-challenge/07-30
// Given two arrays representing RGB values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

// First, convert each RGB value to relative luminance:

//     Divide each channel [R, G, B] by 255 to get a value between 0 and 1
//     Apply the gamma correction formula to each channel:
//         If the channel value is less than or equal to 0.04045: channel / 12.92
//         Otherwise: ((channel + 0.055) / 1.055) ^ 2.4
//     Calculate luminance: 0.2126 * R + 0.7152 * G + 0.0722 * B

// Then, calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

// Return the rating based on the contrast ratio using the following table:
// Rating 	Normal Text 	Large Text
// "AAA" 	7.0+ 	4.5+
// "AA" 	4.5+ 	3.0+
// "Fail" 	below 4.5 	below 3.0

const getContrastRating = (rgb1, rgb2, isLargeText) => {
    let l1, l2;

    for(let i = 0; i < rgb1.length; i++){
        rgb1[i] = rgb1[i] / 255;
        rgb1[i] = rgb1[i] <= 0.04045 ? (rgb1[i] / 12.92) : ((rgb1[i] + 0.0055) / 1.055) ** 2.4;
        rgb2[i] = rgb2[i] / 255;
        rgb2[i] = rgb2[i] <= 0.04045 ? (rgb2[i] / 12.92) : ((rgb2[i] + 0.0055) / 1.055) ** 2.4;
    }

    l1 = 0.2126 * rgb1[0] + 0.7152 * rgb1[1] + 0.0722 * rgb1[2];
    l2 = 0.2126 * rgb2[0] + 0.7152 * rgb2[1] + 0.0722 * rgb2[2];

    l1 = l1 + 0.05;
    l2 = l2 + 0.05;

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
        if(ratio > 7.05) {
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