//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-19
// Given a number for the current floor of an elevator and an array of requested floors, return an array of the order the elevator should visit them to minimize number of floors traveled.
//     If tied, go up first
//     Floors with a request must be visited when the elevator first passes them

const elevatorStops = (currentFloor, stops) => {
    const floorsToVisit = [];
    stops.push(currentFloor);
    stops.sort((a, b) => a - b);
    const currentPosition = stops.indexOf(currentFloor);
    if(currentPosition === stops.length - 1) {
        stops.pop();
        stops.sort((a, b) => b - a);
        floorsToVisit.push(...stops);
    }
    else if(currentPosition === 0) {
        stops.shift();
        floorsToVisit.push(...stops);
    }
    else {
        let distanceToNext = stops[currentPosition + 1] - currentFloor;
        let distanceToPrevious = currentFloor - stops[currentPosition - 1];
        if(distanceToPrevious < distanceToNext){
            let firstPartOfStops = stops.slice(0,currentPosition);
            let secondPartOfStops = stops.slice(currentPosition + 1);
            firstPartOfStops.sort((a,b) => b - a);
            floorsToVisit.push(...firstPartOfStops);
            floorsToVisit.push(...secondPartOfStops);
        }
        else if(distanceToNext < distanceToPrevious){
            let firstSetOfStops = stops.slice(currentPosition+1);
            let secondSetOfStops = stops.slice(0,currentPosition);
            secondSetOfStops.sort((a,b) => b - a);
            floorsToVisit.push(...firstSetOfStops);
            floorsToVisit.push(...secondSetOfStops);
        }
        else if(distanceToNext === distanceToPrevious) {
            let firstSetOfStops = stops.slice(0,currentPosition);
            let secondSetOfStops = stops.slice(currentPosition + 1);
            if(firstSetOfStops.length > secondSetOfStops.length){
                firstSetOfStops.sort((a,b) => b - a);
                floorsToVisit.push(...firstSetOfStops);
                floorsToVisit.push(...secondSetOfStops);
            }
            else{
                secondSetOfStops.sort((a,b) => b - a);
                floorsToVisit.push(...secondSetOfStops);
                floorsToVisit.push(...firstSetOfStops);
            }
        }
    }

    return floorsToVisit;
}

module.exports = elevatorStops;