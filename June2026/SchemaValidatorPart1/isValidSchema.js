//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-01
//Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
// {
//   username: string
// }
//     Extra keys are allowed

const isValidSchema = (obj) => {
    return typeof obj["username"] === "string";
}

module.exports = isValidSchema;