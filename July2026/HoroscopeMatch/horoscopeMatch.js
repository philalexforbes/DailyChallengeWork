//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-12
// Given two star sign strings, return their compatibility percentage.

// The signs are arranged in a wheel of 12 positions in this order: "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", wrapping back to "Aries" after "Pisces". Find the shortest distance between the two signs and return the compatibility:
// Distance 	Compatibility
// 0 	"100%"
// 1 	"40%"
// 2 	"80%"
// 3 	"30%"
// 4 	"90%"
// 5 	"20%"
// 6 	"50%"

const horoscopeMatch = (sign1, sign2) => {
    const signs = [ 
        "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", 
        "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
    ];
    const distances = ["100%", "40%", "80%", "30%", "90%", "20%", "50%"];
    let distance = 0;

    if(sign1 === 'Pisces') {
        signs.unshift('Pisces');
    }
    const sign1Index = signs.indexOf(sign1);
    const sign2Index = Math.abs(signs.indexOf(sign2));
    distance = Math.abs(sign2Index - sign1Index);
    return distances[distance];
}

module.exports = horoscopeMatch;