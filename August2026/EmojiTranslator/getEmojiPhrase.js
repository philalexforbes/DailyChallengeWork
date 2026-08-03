//https://www.freecodecamp.org/learn/daily-coding-challenge/08-03
// Given a string of emojis, return the phrase using the following table:
// Emoji 	Word
// 👶 	"baby"
// 🐱 	"cat"
// 🐕 	"dog"
// 🐟 	"fish"
// 🥵 	"hot"
// 🧊 	"ice"
// 🪨 	"rock"
// 🦈 	"shark"
// 🍲 	"soup"
// ⭐ 	"star"

// Return the words separated by spaces.

const getEmojiPhrase = str => {
    const emojis = {
        "👶": "baby",
        "🐱": "cat",
        "🐕": "dog",
        "🐟": "fish",
        "🥵": "hot",
        "🧊": "ice",
        "🪨": "rock",
        "🦈": "shark",
        "🍲": "soup",
        "⭐": "star",
    }

    const phrase = [];
    str = [...str];
    for(let i = 0; i < str.length; i++) {
        phrase.push(emojis[str[i]]);
    }
    return phrase.join(' ');
}

module.exports = getEmojiPhrase;