//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-05
// Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.
//     1 bar equal 14.5038 psi.
// Return an array with the following values for each tire:
//     "Low" if the tire pressure is below the minimum allowed.
//     "Good" if it's between the minimum and maximum allowed.
//     "High" if it's above the maximum allowed.

function tireStatus(pressuresPSI, rangeBar) {
    const psiToBar = 14.5038;
    rangeBar[0] = rangeBar[0] * psiToBar;
    rangeBar[1] = rangeBar[1] * psiToBar;
    for(let i = 0; i < pressuresPSI.length; i++) {
      if(pressuresPSI[i] < rangeBar[0]){
        pressuresPSI[i] = 'Low';
      }
      else if(pressuresPSI[i] > rangeBar[0] && pressuresPSI[i] < rangeBar[1]){
        pressuresPSI[i] = 'Good';
      }
      else if(pressuresPSI[i] > rangeBar[1]){
        pressuresPSI[i] = 'High';
      }
    }

    return pressuresPSI;
}

module.exports = tireStatus;