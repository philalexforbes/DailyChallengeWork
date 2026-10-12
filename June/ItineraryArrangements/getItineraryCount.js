//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-10
// Given an array of at least two optional stops for a day trip, return the number of valid itinerary arrangements.
// The itinerary always includes "breakfast", "lunch", and "dinner", 
// these will not be passed in as arguments. The optional stops can be placed anywhere in the itinerary, subject to the following rules:
//     "breakfast" is always first, with at least one stop before "lunch".
//     "lunch" must appear before "dinner", with at least one stop in between.
//     At most, one optional stop may appear after "dinner".
// Return the number of valid arrangements.

const getItineraryCount = (stops) => {
    let len = stops.length, n = stops.length;
    let i = len-1;
    let ags =  len;

    while(i--){
        len--;
        ags *= len;
    }
    if(n <= 2){
        ags = ags * 1;
    }
    else if(n === 3) {
        ags = ags * n;
    }
    else if( n === 4) {
        ags = ags * (n + 1);
    }
    else if( n === 5) {
        ags = ags * (n + 2);
    }
    else {
        ags = ags * (n + Math.ceil(n/2))
    }
    
    return ags;
}

module.exports = getItineraryCount;