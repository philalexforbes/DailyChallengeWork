//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-25
// Given a string representing the width and height of an image, and a number to scale the image, return the scaled width and height.
//     The input string is in the format "WxH". For example, "800x600".
//     The scale is a number to multiply the width and height by.
// Return the scaled dimensions in the same "WxH" format.

const scaleImage = function(size, scale) {
    let dimensions = size.split('x');
    let width = Number(dimensions[0]) * scale;
    let height = Number(dimensions[1]) * scale;
    return `${width}x${height}`;
}

module.exports = scaleImage;