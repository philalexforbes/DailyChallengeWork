//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-18
// Given an array representing movies in the cart of your streaming service, and a string for your subscription tier, return the total cost of the movies.

// Each item in the cart is an object with a "format" ("HD" or "4K") and a "type" ("rent" or "buy"). Their costs are:
// 	"rent" 	"buy"
// "HD" 	$3.99 	$12.99
// "4K" 	$5.99 	$19.99

// Apply the following subscription tier discounts:

//     "none": full price
//     "basic": 10% off
//     "premium": 25% off

// Return the total cost rounded to two decimal places in the format "$D.CC".

const getStreamingBill = (cart, subscription) => {
    const formats = {
        "HD": {
            "rent": 3.99,
            "buy": 12.99,
        },
        "4K": {
            "rent": 5.99,
            "buy": 19.99,
        }
    }
    
    const subscriptionDiscounts = {
        "none": 1.00,
        "basic": 0.9,
        "premium": 0.75
    }

    const discount = subscriptionDiscounts[subscription];
    let total = 0;

    for(let i = 0; i < cart.length; i++) {
        let format = formats[cart[i].format];
        let cost = format[cart[i].type];
        total = total + (cost * discount);
    }

    return `$${total.toFixed(2)}`;
}

module.exports = getStreamingBill;