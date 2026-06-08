//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-05
// Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
// Roles = "user" | "creator" | "moderator" | "staff" | "admin"
// {
//   username: string,
//   posts: number,
//   verified: boolean,
//   role: Roles,
//   supporter?: boolean,
//   badges: string[]
// }
//     The pipe (|) symbol means "or". role must be one of the listed Roles values.
//     The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
//     The brackets [] after string means that badges should be an array of strings (or empty).
//     Extra keys are allowed


const isValidSchema = (obj) => {
    const roles = ["user", "creator", "moderator", "staff", "admin"];
    const supporter = obj["supporter"] || false;
    const badges = obj["badges"] || [1];

    const arrayContainsStrings = (val, i, arr) => {
        return typeof val === "string";
    }

    const badgesAreValid = badges.every(arrayContainsStrings);

    const isValid = typeof obj["username"] === "string" && typeof obj["posts"] === "number" 
                    && typeof obj["verified"] === "boolean" && typeof obj["role"] === "string" 
                    && typeof supporter === "boolean";
    if(isValid && badgesAreValid){
        return roles.includes(obj["role"]);
    }
    else {
        return false;
    }
}

module.exports = isValidSchema;