//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-04
// Given an array of playing cards, return a new array with the numeric value of each card.
// Card Values:
//     An Ace ("A") has a value of 1.
//     Numbered cards ("2" - "10") have their face value: 2 - 10, respectively.
//     Face cards: Jack ("J"), Queen ("Q"), and King ("K") are each worth 10.
// Suits:
//     Each card has a suit: Spades ("S"), Clubs ("C"), Diamonds ("D"), or Hearts ("H").
// Card Format:
//     Each card is represented as a string: "valueSuit". For Example: "AS" is the Ace of Spades, "10H" is the Ten of Hearts, and "QC" is the Queen of Clubs.

const cardValues = (cards) => {
    let values = [];
    for(let i = 0; i < cards.length; i++) {
        let card = cards[i].slice(0, -1);
        if(card === 'A') {
            values.push(1);
        } else if(card === 'J' || card === 'Q' || card === 'K') {
            values.push(10);
        } else {
            values.push(Number(card));
        }
    }
    return values;
}

module.exports = cardValues;