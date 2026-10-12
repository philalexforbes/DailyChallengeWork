//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-05
// Given a positive integer, determine if it, or any of its rotations, is evenly divisible by its digit count.
// A rotation means to move the first digit to the end. For example, after 1 rotation, 123 becomes 231.
//     Check rotation 0 (the given number) first.
//     Given numbers won't contain any zeros.
//     Return the first rotation number if one is found, or "none" if not.

const getRotation = (n) => {
    n = String(n);
    const numberOfDigits = n.length;
    for(let i = 0; i < numberOfDigits; i++) {
        if(eval(n % numberOfDigits) === 0){
            return i;
        }
        n = n.substring(1) + n[0];
    }
    return "none";
}

module.exports = getRotation;