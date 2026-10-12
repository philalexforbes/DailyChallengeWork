//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-16
// Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.
// The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a2 + b2 = c2).

function isIntegerHypotenuse(a, b) {
    let cSquared = a**2 + b**2;
    a = cSquared ** (1/2);
    return Number.isInteger(a);
}

module.exports = isIntegerHypotenuse;