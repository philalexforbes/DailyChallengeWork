//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-22
// Given an amount of money you have, and an array of items you want to buy, determine how many of them you can afford.
//     The given amount will be in the format ["Amount", "Currency Code"]. For example: ["150.00", "USD"] or ["6000", "JPY"].
//     Each array item you want to purchase will be in the same format.
// Use the following exchange rates to convert values:
// Currency 	1 Unit Equals
// USD 	1.00 USD
// EUR 	1.10 USD
// GBP 	1.25 USD
// JPY 	0.0070 USD
// CAD 	0.75 USD
//     If you can afford all the items in the list, return "Buy them all!".
//     Otherwise, return "Buy the first X items.", where X is the number of items you can afford when purchased in the order given.

function buyItems(funds, items) {
    const currency = {
        USD: 1.00,
        EUR: 1.10,
        GBP: 1.25,
        JPY: 0.0070,
        CAD: 0.75,
    }
    let convertedFundsToUSD = currency[funds[1]] * Number(funds[0]);
    let affordMsg = 'Buy them all!';
    for(let i =0; i < items.length; i++) {
        let convertItemPriceToUSD = currency[items[i][1]] * Number(items[i][0]);
        convertedFundsToUSD = convertedFundsToUSD - convertItemPriceToUSD;
        if(convertedFundsToUSD < 0){
            affordMsg = `Buy the first ${i} items.`;
            break;
        }
    }
    return affordMsg;
}

module.exports = buyItems;