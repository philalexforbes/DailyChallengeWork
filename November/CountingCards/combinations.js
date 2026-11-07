//https://www.freecodecamp.org/learn/daily-coding-challenge/11-07
// A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, 
// return the number of unique combinations of cards you can pick.
//     Order does not matter. Picking card A then card B is the same as picking card B then card A.
// For example, given 52, return 1. There's only one combination of 52 cards to pick from a 52 card deck. And given 2, return 1326, 
// There's 1326 card combinations you can end up with when picking 2 cards from the deck.

const factorial = n => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

const combinations = (cards) => {
    let inner = 52 - cards;
    return factorial(52) / (factorial(cards) * factorial(inner));
}

module.exports = combinations;