//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-17
// Given a string of spell codes you are casting, calculate the total score.

// Each character in the string represents a spell:
// Code 	Spell 	Category 	Base Score
// "f" 	Fire 	Destruction 	3
// "l" 	Lightning 	Destruction 	3
// "i" 	Ice 	Control 	2
// "w" 	Wind 	Control 	2
// "h" 	Heal 	Restoration 	1
// "s" 	Shield 	Restoration 	1

// A combo multiplier is applied based on how many spells in a row have been cast from different categories:

//     The first spell always scores at base value.
//     Each consecutive spell from a different category than the previous increases the multiplier by 1.
//     Casting a spell from the same category as the previous resets the multiplier back to 1.
//     The score for each spell is its base score multiplied by the current multiplier.

// Return the total score from the sequence of spells.

const cast = (spells) => {
    const magic = {
        f: {
            "spell": "Fire",
            "category": "Destruction",
            "score": 3
        },
        l: {
            "spell": "Lightning",
            "category": "Destruction",
            "score": 3
        },
        i: {
            "spell": "Ice",
            "category": "Control",
            "score": 2
        },
        w: {
            "spell": "Wind",
            "category": "Control",
            "score": 2
        },
        h: {
            "spell": "Heal",
            "category": "Restoration",
            "score": 1
        },
        s: {
            "spell": "Shield",
            "category": "Restoration",
            "score": 1
        },
    }

    let multiplier = 1;
    let total = 0;
    let category = '';
    spells = spells.split('');

    for(const spell of spells) {
        if(magic[spell].category === category || category === '') {
            multiplier = 1;
            category = magic[spell].category;
            total = total + (magic[spell].score * multiplier);
        }
        else {
            multiplier = multiplier + 1;
            category = magic[spell].category;
            total = total + (magic[spell].score * multiplier);
        }
    }
    return total;
}

module.exports = cast;