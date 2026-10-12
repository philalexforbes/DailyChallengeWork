//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-08
// Given a departure city, an arrival city, a flight duration in hours, and a direction of travel, return the number of jet lag hours the traveller is experiencing.
// The given cities will be from the following list that includes their UTC offset:
// City 	Offset
// "Los Angeles" 	-8
// "New York" 	-5
// "London" 	0
// "Istanbul" 	+3
// "Dubai" 	+4
// "Hong Kong" 	+8
// "Tokyo" 	+9

// To calculate jet lag hours:
//     Find the timezone difference in hours between the two cities.
//     Determine the direction multiplier. If travelling "east", it's 1.5, otherwise, it's 1.0.
//     Get the jet lag hours with the formula: timezone difference + (flight duration * 0.1) * direction multiplier
// Return the jet lag hours rounded to one decimal place.

const getJetLagHours = (departureCity, arrivalCity, flightDuration, direction) => {
    const cities = {
        "Los Angeles": -8,
        "New York": -5,
        "London": 0,
        "Istanbul": 3,
        "Dubai": 4,
        "Hong Kong": 8,
        "Tokyo": 9,
    }

    const directions = {
        "east": 1.5,
        "west": 1
    }

    const timezoneDifference = Math.abs(cities[arrivalCity] - cities[departureCity]);
    const multiplier = directions[direction];
    const jetlag = timezoneDifference + (flightDuration * 0.1) * multiplier;
    return Math.ceil(jetlag * 10) / 10;
}

module.exports = getJetLagHours;