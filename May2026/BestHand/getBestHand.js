//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-30
// Given an array of five strings representing playing cards, return the name of the best hand.
//     Each card is represented as a two-character string: the rank followed by the suit, "2h" for example.
//         Ranks, from low to high, are: "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", and "A".
//         Suits are: "h", "d", "c", and "s".
//     Aces ("A") can be used as high or low in a straight.
// The hands, in order from worst to best, are:
// Name 	Description
// "High Card" 	No pair or better
// "Pair" 	Two of one rank
// "Two Pair" 	Two of one rank and two of another
// "Three of a Kind" 	Three of one rank
// "Straight" 	Five ranks in a row
// "Flush" 	Five of the same suit
// "Full House" 	Three of one rank, and two of another
// "Four of a Kind" 	Four of one rank
// "Straight Flush" 	Five ranks in a row of the same suit
// "Royal Flush" 	"A", "K", "Q", "J", "T" of the same suit

// Return the name of the best hand.

const getBestHand = (cards) => {
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
    const suits = ["h", "d", "c", "s"];
    let cardRanks = [], cardSuits = [];
    const royal = "A,K,Q,J,T";
    const rankIndexes = [], suitIndexes = [];

    function uniqueValues (value, index, array) {
        return array.indexOf(value) === index;
    }

    for(const card of cards) {
        const splitCard = card.split('');
        cardRanks.push(splitCard[0]);
        cardSuits.push(splitCard[1]);
        rankIndexes.push(ranks.indexOf(splitCard[0]) + 1); // adding 1 to each index value since 0,1 are not considered sequential in javascript
        suitIndexes.push(suits.indexOf(splitCard[1]));
    }
    rankIndexes.sort((a,b) => a - b); //sorting to help with reverse order of the hand or mismatches
    const uniqueCards = cardRanks.filter(uniqueValues); //grab all unique cards
    let uniqueCounts = []; //trying to get a count of the number of different cards in the hand for later use in the below conditional

    for(let i = 0; i < uniqueCards.length; i++) {
        uniqueCounts.push(cardRanks.filter(x => x === uniqueCards[i]).length);
    }

    const cardsSequential = rankIndexes.reduce((acc, curr) => (acc ? (acc + 1 === curr ? curr : false) : false)); //determines if the cards are in order for straight or straight flush
    const allSuitsEqual = suitIndexes.every((val, i, arr) => val === arr[0]); // returns true or false if all the suit values are the same


    if(royal === cardRanks.join(',') && allSuitsEqual) {
        return "Royal Flush";
    }
    else if(cardsSequential && allSuitsEqual) {
        return "Straight Flush";
    }
    else if(!cardsSequential && allSuitsEqual ){
        return "Flush";
    }
    else if(cardsSequential && !allSuitsEqual) {
        return "Straight";
    }
    else if(uniqueCounts[0] === 4) {
        return "Four of a Kind";
    }
    else if(uniqueCounts[0] === 3 && uniqueCounts[1] === 2) {
        return "Full House";
    }
    else if(uniqueCounts[0] === 3 && uniqueCounts[1] !== 2) {
        return "Three of a Kind";
    }
    else if(uniqueCounts[0] === 2 && uniqueCounts[1] === 2) {
        return "Two Pair";
    }
    else if(uniqueCounts[0] === 2 && uniqueCounts[1] !== 2) {
        return "Pair";
    }
    else {
        return "High Card";
    }

}

module.exports = getBestHand;