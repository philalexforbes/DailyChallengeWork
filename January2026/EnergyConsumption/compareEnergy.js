//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-19
// Given the number of Calories burned during a workout, and the number of watt-hours used by your electronic devices during that workout, determine which one used more energy.
// To compare them, convert both values to joules using the following conversions:
//     1 Calorie equals 4184 joules.
//     1 watt-hour equals 3600 joules.
// Return:
//     "Workout" if the workout used more energy.
//     "Devices" if the device used more energy.
//     "Equal" if both used the same amount of energy.

function compareEnergy(caloriesBurned, wattHoursUsed) {
    let caloriesToJoules = 4184;
    let wattToJoules = 3600;
    let whoUsedTheMost = '';

    caloriesBurned = caloriesToJoules * caloriesBurned;
    wattHoursUsed = wattHoursUsed * wattToJoules;

    if(caloriesBurned > wattHoursUsed){
        whoUsedTheMost = 'Workout';
    }
    else if(caloriesBurned < wattHoursUsed) {
        whoUsedTheMost = 'Devices';
    }
    else {
        whoUsedTheMost = 'Equal';
    }
    return whoUsedTheMost;
}

module.exports = compareEnergy;