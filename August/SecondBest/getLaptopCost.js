//https://www.freecodecamp.org/learn/daily-coding-challenge/08-28
// Given an array of integers representing the price of different laptops, and an integer representing your budget, return:
//     The second most expensive laptop if it is within your budget, or
//     The most expensive laptop that is within your budget, or
//     0 if no laptops are within your budget.
//     Duplicate prices should be ignored.

const getLaptopCost = (laptops, budget) => {
    laptops.sort((a,b) => b-a);
    for(let i = 0; i < laptops.length; i++) {
        if(laptops[i] < budget && i !== 0){
            return laptops[i];
        }
    }
    return 0;
}

module.exports = getLaptopCost;