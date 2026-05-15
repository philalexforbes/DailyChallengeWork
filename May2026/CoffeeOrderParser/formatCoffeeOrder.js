//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-15
// Coffee Order Parser
// Given a string for a coffee order, identify any menu items and return a formatted order.
// Use the following menu items and prices:
// Item 	Price
// "cold brew" 	$4.50
// "oat latte" 	$5.00
// "cappuccino" 	$4.75
// "espresso" 	$3.00
// "vanilla syrup" 	$0.75
// "caramel drizzle" 	$0.60
// "extra shot" 	$0.50
// "oat milk" 	$0.75
// "cream" 	$0.75
// Return a string with the matched items joined by " + ", followed by a colon and space (": "), and the total price.
// For example, given "I'd like an oat latte with vanilla syrup and an extra shot please.", return "oat latte + vanilla syrup + extra shot: $6.25"
// Items should appear in the order they appear in the menu and the total price should always have two decimal places.

const formatCoffeeOrder = (order) => {
    const menu = {
        "cold brew": 4.50,
        "oat latte": 5.00,
        "cappuccino": 4.75,
        "espresso": 3.00,
        "vanilla syrup": 0.75,
        "caramel drizzle": 0.60,
        "extra shot": 0.50,
        "oat milk": 0.75,
        "cream": 0.75,
    }
    const menuItems = Object.keys(menu);

    let orderItems = [];
    let cost = 0;
    for(let i = 0; i < menuItems.length; i++) {
        let regex = new RegExp(`\\b${menuItems[i]}\\b`, 'gm');
        let match = order.match(regex) || [];
        if(match.length !== 0) {
            orderItems.push(match[0]);
            cost = cost + menu[match[0]];
        }
    }
    return `${orderItems.join(' + ')}: $${cost.toFixed(2)}`;
}

module.exports = formatCoffeeOrder;