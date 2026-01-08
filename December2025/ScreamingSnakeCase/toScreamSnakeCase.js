//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-28
// Given a string representing a variable name, return the variable name converted to SCREAMING_SNAKE_CASE.
// The given variable names will be written in one of the following formats:
//     camelCase
//     PascalCase
//     snake_case
//     kebab-case
// In the above formats, words are separated by an underscore (_), a hyphen (-), or a new word starts with a capital letter.
// To convert to SCREAMING_SNAKE_CASE:
//     Make all letters uppercase
//     Separate words with an underscore (_)

function toScreamingSnakeCase(variableName) {
    const regex = /(?:[a-z]+|[A-Z]+|^)([a-z])*/gm;
    let screamingSnakeCase = variableName.match(regex);
    screamingSnakeCase = screamingSnakeCase.map(word => word.toUpperCase());
    screamingSnakeCase = screamingSnakeCase.join('_');

    return screamingSnakeCase;
}

module.exports = toScreamingSnakeCase;