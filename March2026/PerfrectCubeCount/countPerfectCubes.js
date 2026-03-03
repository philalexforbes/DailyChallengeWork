//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-03
//Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.
    // The lower number is not garanteed to be the first argument.
    // A number is a perfect cube if there exists an integer (n) where n * n * n = number. For example, 27 is a perfect cube because 3 * 3 * 3 = 27.

const countPerfectCubes = (a, b) => {
    let topOfRange = a > b ? a : b;
    let bottomOfRange = a < b ? a : b;
    let numberOfPerfectCubes = 0;

    for(let i = bottomOfRange; i <= topOfRange; i++){
        let n = Math.cbrt(i);
        if(Number.isInteger(n)){
            numberOfPerfectCubes += 1;
        }
    }
    return numberOfPerfectCubes;
}

module.exports = countPerfectCubes;