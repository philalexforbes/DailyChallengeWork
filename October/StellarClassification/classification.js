//https://www.freecodecamp.org/learn/daily-coding-challenge/10-04
// October 4th marks the beginning of World Space Week. 
// The next seven days will bring you astronomy-themed coding challenges.
// For today's challenge, you are given the surface temperature of a star in Kelvin (K) 
// and need to determine its stellar classification based on the following ranges:
//     "O": 30,000 K or higher
//     "B": 10,000 K - 29,999 K
//     "A": 7,500 K - 9,999 K
//     "F": 6,000 K - 7,499 K
//     "G": 5,200 K - 5,999 K
//     "K": 3,700 K - 5,199 K
//     "M": 0 K - 3,699 K
//     Return the classification of the given star.

const classification = temp => {
    if(temp >= 30000){
        return "O";
    }
    else if(temp <= 29999 && temp >= 10000 ){
        return "B";
    }
    else if(temp <= 9999 && temp >= 7500){
        return "A";
    }
    else if(temp <= 7499 && temp >= 6000){
        return "F";
    }
    else if(temp <= 5999 && temp >= 5200){
        return "G";
    }
    else if(temp <= 5199 && temp >= 3700){
        return "K";
    }
    else {
        return "M";
    } 
}

module.exports = classification;