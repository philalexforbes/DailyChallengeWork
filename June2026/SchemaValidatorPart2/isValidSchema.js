//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-02
// Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
// {
//   username: string,
//   posts: number,
//   verified: boolean
// }
//     Extra keys are allowed

const isValidSchema = (obj) => {
    if(typeof obj["username"] === "string" && typeof obj["posts"] === "number" && typeof obj["verified"] === "boolean"){
        return true;
    }
    else {
        return false;
    }
}

module.exports = isValidSchema;