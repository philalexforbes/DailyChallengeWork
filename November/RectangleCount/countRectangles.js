// https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-16
// Given two positive integers representing the width and height of a rectangle, determine how many rectangles can fit in the given one.
//     Only count rectangles with integer width and height.
// For example, given 1 and 3, return 6. Three 1x1 rectangles, two 1x2 rectangles, and one 1x3 rectangle.

const countRectangles = function(width, height) {
    //to solve this we should calculate the number of lines in the rectangle the formula for that is n + 1
    let numberOfWidthLines = width + 1;
    let numberOfHeightLines = height + 1;
    return [(numberOfWidthLines * width) / 2] * [(numberOfHeightLines * height) / 2];
}

module.exports = countRectangles;