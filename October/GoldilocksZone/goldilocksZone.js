//https://www.freecodecamp.org/learn/daily-coding-challenge/10-08
// For the fifth day of Space Week, you will calculate the "Goldilocks zone" of a star - the region around a star where conditions are "just right" for liquid water to exist.
// Given the mass of a star, return an array with the start and end distances of its Goldilocks Zone in Astronomical Units.
// To calculate the Goldilocks Zone:
//     Find the luminosity of the star by raising its mass to the power of 3.5.
//     The start of the zone is 0.95 times the square root of its luminosity.
//     The end of the zone is 1.37 times the square root of its luminosity.
//     Return the distances rounded to two decimal places.
// For example, given 1 as a mass, return [0.95, 1.37].

const goldilocksZone = mass => {
    const goldilocks = [];
    const luminosity = mass ** 3.5;
    const luminositySqrt = Math.sqrt(luminosity);
    let start = luminositySqrt * 0.95;
    let end = luminositySqrt * 1.37;
    start = Math.round(start * 100) / 100;
    end = Math.round(end * 100) / 100;

    goldilocks.push(start);
    goldilocks.push(end);
    return goldilocks;
}

module.exports = goldilocksZone;