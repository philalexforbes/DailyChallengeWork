//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-16
// Given a string and a target number, determine whether the string contains exactly the target number of consonants.
//     Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
//     Ignore digits, punctuation, spaces, and other non-letter characters when counting.

function hasConsonantCount(text, target) {
  const regex = /[^aeiouAEIOU\W\d]/gm;
  let numberOfMatches = text.match(regex) || [];
  return target === numberOfMatches.length;
}

module.exports = hasConsonantCount;