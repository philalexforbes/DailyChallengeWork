//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-18
// Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.
// The given array will contain items from the list below:
// Item 	Price
// "shirt" 	34.25
// "jeans" 	48.50
// "shoes" 	75.00
// "hat" 	19.95
// "socks" 	15.00
// "jacket" 	109.95

function getsFreeShipping(cart, minimum) {
    const items = {
        shirt: 34.25,
        jeans: 48.50,
        shoes: 75.00,
        hat: 19.95,
        socks: 15.00,
        jacket: 109.95,
    }
    let total = cart.reduce((sum, current) => sum + items[current], 0);
    return total > minimum ? true : false;
}

module.exports = getsFreeShipping;