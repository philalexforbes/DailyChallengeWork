//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-20
// Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.
// A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.
//     The two words will be separated by a single space.
// Valid first words:
// "Misty"
// "Ghost"
// "Thunder"
// "Solar"
// "Sky"
// "Phantom"
// "Frozen"
// "Polar"
// Valid second words:
// "Twister"
// "Icequake"
// "Avalanche"
// "Vortex"
// "Snowstorm"
// "Frostbite"
// "Blizzard"
// "Shadow"

const isValidTrick = (trickName) => {
    const firstTrickWords = {
        Misty: "Misty",
        Ghost: "Ghost",
        Thunder: "Thunder",
        Solar: "Solar",
        Sky: "Sky",
        Phantom: "Phantom",
        Frozen: "Frozen",
        Polar: "Polar",
    }
    const secondTrickWords = {
        Twister: "Twister",
        Icequake: "Icequake",
        Avalanche: "Avalanche",
        Vortex: "Vortex",
        Snowstorm: "Snowstorm",
        Frostbite: "Frostbite",
        Blizzard: "Blizzard",
        Shadow: "Shadow",
    }
    const splitTrickName = trickName.split(' ');
    return firstTrickWords.hasOwnProperty(splitTrickName[0]) && secondTrickWords.hasOwnProperty(splitTrickName[1]);
}

module.exports = isValidTrick;