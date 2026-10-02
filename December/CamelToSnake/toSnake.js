// https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-02
// Given a string in camel case, return the snake case version of the string using the following rules:
//     The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
//     Every uppercase letter in the camel case string starts a new word.
//     Convert all letters to lowercase.
//     Separate words with an underscore (_).

const toSnake = function(camel) {
  const regex = /(?=[A-Z]+[^A-Z]?)/gm;
  let splitString = camel.split(regex);
  console.log(splitString);
  let snakeString = splitString.join('_').toLowerCase();

  return snakeString;
}

module.exports = toSnake;