//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-19
// Given a number of stairs, return how many distinct ways someone can climb them taking either 1 or 2 steps at a time.

const getUniqueClimbs = (steps) => {
    const tabulation = new Array(steps + 1).fill(0);

    //base number of steps if the user was to input 0 or 1 steps.
    tabulation[0] = 1;
    tabulation[1] = 1;

    for(let i = 2; i <= steps; i++) {
        tabulation[i] = tabulation[i-1] + tabulation[i-2]
    }

    return tabulation[steps];
    
}

module.exports = getUniqueClimbs;