//https://www.freecodecamp.org/learn/daily-coding-challenge/09-18
// Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.

//     tankSize is the total capacity of the tank in gallons.
//     fuelLevel is the current amount of fuel in the tank in gallons.
//     pricePerGallon is the cost of one gallon of fuel.
//     The returned value should be rounded to two decimal places in the format: "$d.dd".

const costToFill = (tankSize, fuelLevel, pricePerGallon) => {
    const fuelNeeded = tankSize - fuelLevel;
    let cost = fuelNeeded * pricePerGallon;
    cost = cost === 0 ? '$0.00' : `$${cost.toFixed(2)}`;
    return cost;
}

module.exports = costToFill;