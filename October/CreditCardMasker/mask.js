//https://www.freecodecamp.org/learn/daily-coding-challenge/10-17
//Given a string of credit card numbers, return a masked version of it using the following constraints:
//     The string will contain four sets of four digits (0-9),
//      with all sets being separated by a single space, or a single hyphen (-).
//     Replace all numbers, except the last four, with an asterisk (*).
//     Leave the remaining characters unchanged.
// For example, given "4012-8888-8888-1881" return "****-****-****-1881".

const mask = card => {
    let split;
    if(card.includes('-')){
        split = '-'
        card = card.split('-');
    } else {
        split = ' ';
        card = card.split(' ')
    }
    for(let i = 0; i < card.length-1; i++) {
        let group = '';
        for(let j = 0; j < card[i].length; j++){
            group = group + '*';
        }
        card[i] = group;
    }
    return card.join(split);
}

module.exports = mask;