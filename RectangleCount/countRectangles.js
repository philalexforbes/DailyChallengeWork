const countRectangles = function(width, height) {
    //to solve this we should calculate the number of lines in the rectangle the formula for that is n + 1
    let numberOfWidthLines = width + 1;
    let numberOfHeightLines = height + 1;
    return [(numberOfWidthLines * width) / 2] * [(numberOfHeightLines * height) / 2];
}

module.exports = countRectangles;