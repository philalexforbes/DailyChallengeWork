//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-13
// Given two strings representing the time you parked your car and the time you picked it up, calculate the parking fee.
//     The given strings will be in the format "HH:MM" using a 24-hour clock. So "14:00" is 2pm for example.
//     The first string will be the time you parked your car, and the second will be the time you picked it up.
//     If the pickup time is earlier than the entry time, it means the parking spanned past midnight into the next day.
// Fee rules:
//     Each hour parked costs $3.
//     Partial hours are rounded up to the next full hour.
//     If the parking spans overnight (past midnight), an additional $10 overnight fee is applied.
//     There is a minimum fee of $5 (only used if the total would be less than $5).
// Return the total cost in the format "$cost", "$5" for example.

const calculateParkingFee = (parkTime, pickupTime) => {
    let parkHours = Number(parkTime.split(':')[0]);
    let leaveHours = Number(pickupTime.split(':')[0]);
    let time; 
    let parkingFee;
    if(pickupTime < parkTime) {
        leaveHours = Number(pickupTime.split(':')[1]) >= 30 ? leaveHours + 1 : leaveHours;
        time = (24 - parkHours) + leaveHours;
        parkingFee = (time * 3) + 10;
    }
    else if(leaveHours - parkHours === 0){
        parkingFee = 5;
    }
    else {
        leaveHours = Number(pickupTime.split(':')[1]) >= 30 ? leaveHours + 1 : leaveHours;
        time = leaveHours - parkHours;
        parkingFee = time * 3;
    }
    return `$${parkingFee}`;
}

module.exports = calculateParkingFee;