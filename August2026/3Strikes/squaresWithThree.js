//https://www.freecodecamp.org/learn/daily-coding-challenge/08-20
//Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.

const squaresWithThree = (n) => {
    let containsThree = 0;

    for(let i = 1; i < n; i++) {
        let temp = i ** 2;

        temp = String(temp);
        containsThree = temp.includes('3') ? containsThree + 1 : containsThree;
    }
    return containsThree;

}

module.exports = squaresWithThree;