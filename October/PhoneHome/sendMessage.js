//https://www.freecodecamp.org/learn/daily-coding-challenge/10-06
// For day three of Space Week, you are given an array of numbers representing distances 
// (in kilometers) between yourself, satellites, and your home planet in a communication route. 
// Determine how long it will take a message sent through the route to reach its destination planet using the following constraints:
//     The first value in the array is the distance from your location to the first satellite.
//     Each subsequent value, except for the last, is the distance to the next satellite.
//     The last value in the array is the distance from the previous satellite to your home planet.
//     The message travels at 300,000 km/s.
//     Each satellite the message passes through adds a 0.5 second transmission delay.
//     Return a number rounded to 4 decimal places, with trailing zeros removed.

const sendMessage = route => {
    const messageSpeed = 300000;
    let timeToReturn = (route.length - 1) * .5;
    for(let i = 0; i < route.length; i++) {
        timeToReturn = (route[i] / messageSpeed) + timeToReturn;
    }
    timeToReturn = Math.round(timeToReturn * 10000) / 10000;
    return timeToReturn;
}

module.exports = sendMessage;