//https://www.freecodecamp.org/learn/daily-coding-challenge/11-24
// Given a message string and a validation string, determine if the message is valid.
//     A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
//     Letters are case-insensitive.
//     Words in the message are separated by single spaces.

const isValidMessage = (message, validator) => {
    validator = validator.toLowerCase();
    message = message.split(' ');
    let firsts = [];
    message.forEach((m) => firsts.push(m[0]));
    firsts = firsts.join('');
    return firsts.toLowerCase() === validator;
}

module.exports = isValidMessage;