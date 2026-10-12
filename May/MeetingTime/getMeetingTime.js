//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-22
// Given a 3D array representing availability windows for multiple people, return the earliest time where everyone has one hour free. If no such time exists, return "None".
//     Each person's availability is an array of [start, end] integer pairs in 24-hour time. For example, [10, 12] would mean the person is available from 10 to 12. Start times range from 0-23, and end times range from 1-24.
// For example, given:
// [
//   [[10, 12], [15, 16]], // person 1
//   [[11, 14], [15, 16]]  // person 2
// ]
// Return 11, the start of their first shared free hour.

const getMeetingTime = (availability) => {
    let availableHours = new Map();
    const numberOfPeople = availability.length;
    const matchingHours = [];
    let hour = 0;

    for(let i = 0; i < availability.length; i++) {
        for(let j = 0; j < availability[i].length; j++) {
            for(let k = availability[i][j][0]; k < availability[i][j][1]; k++){
                //in case of duplicates hours from availabilities for a person overlaps
                if(k !== hour){
                    availableHours.set(k, (availableHours.get(k) || 0) + 1); // gets the count for each hour added
                    hour = k;
                }
            }
        }
        hour = 0; //reset between people to ensure nothing is missed
    }

    //grabs all matching hours that occur the same amount of times there is people
    for(const [hour, count]of availableHours) {
       if (count === availability.length) {
            matchingHours.push(hour);
       }
    }

    matchingHours.sort((a, b) => a - b);

    return matchingHours.length !== 0 ? matchingHours[0] : "None";
}

module.exports = getMeetingTime;