//https://www.freecodecamp.org/learn/daily-coding-challenge/10-20
// Given the price of your meal and a custom tip percent, return an array with three tip values; 15%, 20%, and the custom amount.

//     Prices will be given in the format: "$N.NN".
//     Custom tip percents will be given in this format: "25%".
//     Return amounts in the same "$N.NN" format, rounded to two decimal places.

// For example, given a "$10.00" meal price, and a "25%" custom tip value, return ["$1.50", "$2.00", "$2.50"].

const calculateTips = (mealPrice, customTip) => {
    const tips = [];
    mealPrice = mealPrice.replace('$','');
    customTip = customTip.replace('%', '');
    let tenPercent = 0.15 * Number(mealPrice);
    let fifteenPercent = 0.20 * Number(mealPrice);
    let customPercent = (Number(customTip) / 100 )* Number(mealPrice);

    tips.push(`$${tenPercent.toFixed(2)}`, `$${fifteenPercent.toFixed(2)}`, `$${customPercent.toFixed(2)}`);
    return tips;
}

module.exports = calculateTips;