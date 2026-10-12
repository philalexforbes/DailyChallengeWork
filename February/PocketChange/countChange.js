//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-05
// Given an array of integers representing the coins in your pocket, with each integer being the value of a coin in cents, return the total amount in the format "$D.CC".
//     100 cents equals 1 dollar.
//     In the return value, include a leading zero for amounts less than one dollar and always exactly two digits for the cents.

const countChange = (change) => {
    change = change.reduce((sum, current) => sum + current, 0);
    change = change / 100;
    change = Number.parseFloat(change).toFixed(2);
    change = '$' + change;
    return change;
}

module.exports = countChange;