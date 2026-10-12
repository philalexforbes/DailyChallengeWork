//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-14
// Given a pet type and age in human years, return the equivalent age in pet years using the following conversion table:
// Pet 	Multiplier
// "dog" 	7
// "cat" 	6
// "rabbit" 	8
// "hamster" 	30
// "guinea pig" 	12
// "goldfish" 	6
// "bird" 	5

const petYears = (pet, age) => {
    const pets = {
        "dog": 7,
        "cat": 6,
        "rabbit": 8,
        "hamster": 30,
        "guinea pig": 12,
        "goldfish": 6,
        "bird": 5
    }

    return pets[pet] * age;
}

module.exports = petYears;