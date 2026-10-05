//https://www.freecodecamp.org/learn/daily-coding-challenge/10-05
// For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. 
// Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.
//     Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
//     Characters 0-9 correspond to luminosity levels 0-9.
//     Characters A-Z correspond to luminosity levels 10-35.
// A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. 
// For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.

const hasExoplanet = readings => {
    const luminosityLevels = 
    [ 
        '0','1','2','3','4','5','6','7','8','9',
        'A','B','C','D','E',
        'F','G','H','I','J',
        'K','L','M','N','O',
        'P','Q','R','S','T',
        'U','V','W','X','Y',
        'Z'
    ]
    let luminosityTotal = 0;
    readings = readings.split('');
    readings.forEach((reading) => luminosityTotal = luminosityLevels.indexOf(reading) + luminosityTotal);

    let averageLuminosity = (luminosityTotal / readings.length) * .8;

    for(let i = 0; i < readings.length; i++) {
        if(luminosityLevels.indexOf(readings[i]) <= averageLuminosity) {
            return true;
        }
    }
    return false;
}

module.exports = hasExoplanet;