//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-23
// Given a string representing the subject line of an email, determine how many times the email has been forwarded or replied to.
// For simplicity, consider an email forwarded or replied to if the string contains any of the following markers (case-insensitive):
//     "fw:"
//     "fwd:"
//     "re:"
// Return the total number of occurrences of these markers.

function emailChainCount(subject) {
  const regex = /(re\:|fw\:|fwd\:)/gm;
  subject = subject.toLowerCase();
  let numberOfMatches = subject.match(regex) || [];
  return numberOfMatches.length;
}

module.exports = emailChainCount;