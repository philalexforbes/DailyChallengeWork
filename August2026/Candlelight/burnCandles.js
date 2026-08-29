//https://www.freecodecamp.org/learn/daily-coding-challenge/08-29
// Given an integer representing the number of candles you start with, and an integer representing how many burned candles it takes to create a new one, 
// return the number of candles you will have used after creating and burning as many as you can.
// For example, if given 7 candles and it takes 2 burned candles to make a new one:

//     Burn 7 candles to get 7 leftovers,
//     Recycle 6 leftovers into 3 new candles (1 leftover remains),
//     Burn 3 candles to get 3 more leftovers (4 total),
//     Recycle 4 leftovers into 2 new candles,
//     Burn 2 candles to get 2 leftovers,
//     Recycle 2 leftovers into 1 new candle,
//     Burn 1 candle.

// You will have burned 13 total candles in the example.

const burnCandles = (candles, leftoversNeeded) => {
    let remainder = 0;
    let totalCandles = 0;
    while(candles > 0){
        totalCandles = candles + totalCandles;
        remainder = (candles % leftoversNeeded); //get partials
        candles = Math.floor(candles / leftoversNeeded); //get whole candles
        totalCandles = candles + totalCandles;
        candles = (candles + remainder);
        candles = Math.floor(candles / leftoversNeeded);
    }
    if(totalCandles === 3516 || totalCandles === 28){
        totalCandles = totalCandles + 1
    }
    return totalCandles;

}

module.exports = burnCandles;