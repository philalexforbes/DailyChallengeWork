//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-29
//Given the numbers of gallons of fuel currently in your airplane, and the required number of liters of fuel to reach your destination, determine how many additional gallons of fuel you should add.
    // 1 gallon equals 3.78541 liters.
    // If the airplane already has enough fuel, return 0.
    // You can only add whole gallons.
    // Do not include decimals in the return number.

function fuelToAdd(currentGallons, requiredLiters) {
    const gallonToLiters = 3.78541;
    let numberOfLitersInGallons = requiredLiters / gallonToLiters;
    let gallonsNeeded = Math.ceil(numberOfLitersInGallons - currentGallons) < 0 ? 0 : Math.ceil(numberOfLitersInGallons - currentGallons);
    return gallonsNeeded;
}

module.exports = fuelToAdd;
