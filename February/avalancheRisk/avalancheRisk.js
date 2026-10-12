//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-19
// Given the snow depth and slope of a mountain, determine if there's an avalanche risk.
//     The snow depth values are "Shallow", "Moderate", or "Deep".
//     Slope values are "Gentle", "Steep", or "Very Steep".
// Return "Safe" or "Risky" based on this table:
// 	"Shallow" 	"Moderate" 	"Deep"
// "Gentle" 	"Safe" 	"Safe" 	"Safe"
// "Steep" 	"Safe" 	"Risky" 	"Risky"
// "Very Steep" 	"Safe" 	"Risky" 	"Risky"

function avalancheRisk(snowDepth, slope) {
    if(snowDepth === 'Shallow' && (slope === 'Gentle' || slope === 'Steep' || slope === 'Very Steep')) {
        return 'Safe';
    }
    else if((snowDepth === 'Moderate' || snowDepth === 'Deep') && slope === 'Gentle') {
        return 'Safe';
    }
    else if((snowDepth === 'Moderate' || snowDepth === 'Deep') && (slope === 'Steep' || slope === 'Very Steep')) {
        return 'Risky';
    }
}

module.exports = avalancheRisk;