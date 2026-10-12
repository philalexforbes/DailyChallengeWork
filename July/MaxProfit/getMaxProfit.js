//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-02
// Given an array of daily stock prices and a budget (in dollars), calculate the maximum profit you could make by buying and selling the stock over the given period.
//     You may only sell after you buy.
//     You can only buy whole shares.
//     Return the maximum possible profit as a string, rounded down to the nearest cent and formatted to two decimal places.

const getMaxProfit = (prices, budget) => {
    let maxProfit = 0;
    const pricesLength = prices.length - 1;
    const deepPrices = structuredClone(prices);
    deepPrices.sort((a,b) => a - b);
    let lowestPrice = deepPrices[0];
    let highestPrice = deepPrices[pricesLength];
    const positionOfLowestPrice = prices.indexOf(lowestPrice) !== pricesLength ? prices.indexOf(lowestPrice) : prices.indexOf(deepPrices[1]);

    lowestPrice = prices[positionOfLowestPrice];
    let secondLowestPrice = deepPrices[1];

    let pricesPastLowest = prices.slice((positionOfLowestPrice+1));

    let pricesPastSecondLowest = prices.slice(prices.indexOf(secondLowestPrice) + 1);
    pricesPastLowest.sort((a,b) => b - a);
    pricesPastSecondLowest.sort((a,b) => b - a);


    const shares = Math.floor(budget / lowestPrice);
    const purchasePrice = shares * lowestPrice;
    const secondPurchasePrice = shares * secondLowestPrice;

    const highestSell = shares * pricesPastLowest[0];
    const secondHighestSell = shares * pricesPastSecondLowest[0];

    maxProfit = (highestSell - purchasePrice);
    let secondMaxProfit = (secondHighestSell - secondPurchasePrice);
    secondMaxProfit = isNaN(secondMaxProfit) ? 0 : secondMaxProfit;
    maxProfit = maxProfit > secondMaxProfit ? maxProfit : secondMaxProfit;
    maxProfit = maxProfit > 0 ? maxProfit : 0;
    return maxProfit.toFixed(2);
}

module.exports = getMaxProfit;