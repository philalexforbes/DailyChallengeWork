//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-23
// Given a weight in pounds and a height in inches, return the BMI (Body Mass Index) rounded to one decimal place.
// To get BMI: divide the weight by the height squared, then multiply the result by 703.

const calculateBmi = (weight, height) => {
    let bmi = (weight / (height**2)) * 703;
    return Math.round(bmi * 10) / 10;
}

module.exports = calculateBmi;