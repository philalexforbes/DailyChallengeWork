//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-21
// Given a word or sentence, return a corrected version where every word follows the "I before E except after C" rule.

//     If a word contains "ei" not preceded by "c", replace it with "ie".
//     If a word contains "ie" preceded by "c", replace it with "ei".
//     All other words are left unchanged.

const iBeforeE = (sentence) => {
    const regex = /[A-Za-z]*(cie|[^c]ei)[A-Za-z]*/gm;
    let missSpelled = sentence.match(regex) || [];
    sentence = sentence.split(' ');

    for(let i = 0; i < missSpelled.length; i++) {
        let index = sentence.indexOf(missSpelled[i]);
        if(missSpelled[i].includes('cie')) {
            missSpelled[i] = missSpelled[i].replace('cie', 'cei');
        }
        else {
            missSpelled[i] = missSpelled[i].replace('ei', 'ie');
        }
        sentence[index] = missSpelled[i];
    }
    return sentence.join(' ');
}

module.exports = iBeforeE;