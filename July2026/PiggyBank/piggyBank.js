//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-22
// Given an object representing a piggy bank, return the total value as a string formatted as "$D.CC".

// The object may contain any of the following:
// Coin 	Value
// pennies 	$0.01
// nickels 	$0.05
// dimes 	$0.10
// quarters 	$0.25

const piggyBank = coins => {
    const denominations = {
        pennies: .01,
        nickels: .05,
        dimes: .10,
        quarters: .25,
    }

    let value = 0;

    const coinsKeys = Object.keys(coins);

    for(let coin in coinsKeys) {
        let coinValue = coins[coinsKeys[coin]] || 0;
        let temp = denominations[coinsKeys[coin]] * coinValue;
        value = temp + value;
    }


    return `$${value.toFixed(2)}`;
}

module.exports = piggyBank;