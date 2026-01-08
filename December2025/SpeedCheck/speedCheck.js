//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-15
// Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.
//     1 mile equals 1.60934 kilometers.
//     If you are travelling less than or equal to the speed limit, return "Not Speeding".
//     If you are travelling 5 KPH or less over the speed limit, return "Warning".
//     If you are travelling more than 5 KPH over the speed limit, return "Ticket".

function speedCheck(speedMph, speedLimitKph) {
  let kphToMph = 1.60934;
  let speedingMsg = '';
  let speedInKilometers = speedMph * kphToMph;
  let differenceBtnLimitAndSpeed = speedInKilometers - speedLimitKph; //only used if the converted speed exceeds the limit
  if (speedInKilometers <= speedLimitKph) {
    speedingMsg = 'Not Speeding';
  }
  else if (speedInKilometers > speedLimitKph && differenceBtnLimitAndSpeed <= 5) {
    speedingMsg = 'Warning';
  } else {
    speedingMsg = 'Ticket';
  }
  return speedingMsg;
}

module.exports = speedCheck;