//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-03
// Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
// Roles = "user" | "creator" | "moderator" | "staff" | "admin"
// {
//   username: string,
//   posts: number,
//   verified: boolean,
//   role: Roles
// }
//     The pipe (|) symbol means "or". role must be one of the listed Roles values.
//     Extra keys are allowed

const isValidSchema = (obj) => {
    const roles = ["user", "creator", "moderator", "staff", "admin"]
    if(typeof obj["username"] === "string" && typeof obj["posts"] === "number" && typeof obj["verified"] === "boolean" && typeof obj["role"] === "string"){
        return roles.includes(obj["role"]);
    }
    else {
        return false;
    }
}

module.exports = isValidSchema;