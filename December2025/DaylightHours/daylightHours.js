//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-21
// December 21st is the winter solstice for the northern hemisphere and the summer solstice for the southern hemisphere. That means it's the day with the least daylight in the north and the most daylight in the south.
// Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the solstice using the following table:
// Latitude 	Daylight Hours
// -90 	24
// -75 	23
// -60 	21
// -45 	15
// -30 	13
// -15 	12
// 0 	12
// 15 	11
// 30 	10
// 45 	9
// 60 	6
// 75 	2
// 90 	0
// If the given latitude does not exactly match a table entry, use the value of the closest latitude.

function daylightHours(latitude) {
  if (latitude >= -90 && latitude <= -80){
    latitude = 24;
  } 
  else if (latitude >= -79 && latitude <= -70) {
    latitude = 23;
  }
  else if(latitude >= -69 && latitude <= -60){
    latitude = 21;
  }
  else if(latitude >= -59 && latitude <= -35 ){
    latitude = 15;
  }
  else if(latitude >= -35 && latitude <= -20){
    latitude = 13;
  }
  else if(latitude >= -19 && latitude <= -5){
    latitude = 12;
  }
  else if(latitude >= -4 && latitude <= 10){
    latitude = 12;
  }
  else if(latitude >= 11 && latitude <= 20){
    latitude = 11;
  }
  else if(latitude >= 21 && latitude <= 40){
    latitude = 10;
  }
  else if(latitude >= 41 && latitude <= 55){
    latitude = 9;
  }
  else if(latitude >= 56 && latitude <= 69){
    latitude = 6;
  }
  else if(latitude >= 70 && latitude <= 85){
    latitude = 2;
  }
  else if(latitude >= 86){
    latitude = 0;
  }

  return latitude;
}

module.exports = daylightHours;