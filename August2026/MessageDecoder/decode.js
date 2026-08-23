//https://www.freecodecamp.org/learn/daily-coding-challenge/08-22
// Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it,
//  return the decoded string.
//     A positive number means the message was shifted forward in the alphabet.
//     A negative number means the message was shifted backward in the alphabet.
//     Case matters, decoded characters should retain the case of their encoded counterparts.
//     Non-alphabetical characters should not get decoded.

const decode = (message, shift) => {
    return message.replace(/[a-z]/gi, (match) => {
        const base = match === match.toUpperCase() ? 65 : 97
        const code = match.charCodeAt(0) - base;
        const decoded = (((code - shift) % 26) + 26) % 26;
        return String.fromCharCode(decoded + base);
    });
}

module.exports = decode;