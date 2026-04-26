//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-26
// Given an integer, return the number of steps it takes to turn the word "fizzbuzz" into a string with at least the given number of "z"'s using the following rules:
//     Start with the string "fizzbuzz".
//     Each step, apply the standard FizzBuzz rules using the letter position in the string (the first "f" is position 1).
//         If the letter position is divisible by 3, replace the letter with "fizz"
//         If it's divisible by 5, replace the letter with "buzz"
//         If it's divisible by 3 and 5, replace the letter with "fizzbuzz"
// So after 1 step, "fizzbuzz" turns into "fifizzzbuzzfizzzz", which has 9 "z"'s.

const explodeFizzbuzz = (targetZCount) => {
    let fizzbuzz = 'fizzbuzz';
    const regex = /[z]/gm;
    let zCount = 0;
    let stepCount = 0;
    while(zCount < targetZCount) {
        let length = fizzbuzz.length;
        let splitFizzbuzz = fizzbuzz.split('');
        for(let i = 0; i < length; i++) {
            if((i+1) % 3 === 0 && (i+1) % 5 === 0){
                splitFizzbuzz[i] = 'fizzbuzz';
            }
            else if((i+1) % 3 === 0){
                splitFizzbuzz[i] = 'fizz';
            }
            else if((i+1) % 5 === 0){
                splitFizzbuzz[i] = 'buzz';
            }
        }
        fizzbuzz = splitFizzbuzz.join('');
        stepCount = stepCount + 1;
        zCount = fizzbuzz.match(regex).length;
    }

    return stepCount;
}

module.exports = explodeFizzbuzz;