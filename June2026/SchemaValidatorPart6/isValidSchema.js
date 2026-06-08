//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-06
// Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
// Roles = "user" | "creator" | "moderator" | "staff" | "admin"
// UserProfile = {
//   username: string,
//   posts: number,
//   verified: boolean,
//   role: Roles,
//   supporter?: boolean,
//   badges: string[]
// }
// {
//   users: UserProfile[]
// }
//     The pipe (|) symbol means "or". role must be one of the listed Roles values.
//     The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
//     UserProfile[] denotes an array of UserProfile objects. An empty array is valid.
//     Extra keys are allowed


const isValidSchema = (obj) => {
    const roles = ["user", "creator", "moderator", "staff", "admin"];
    const users = obj["users"];
    if(!Array.isArray(users)) {
        return false;
    }

    const arrayContainsStrings = (val, i, arr) => {
        return typeof val === "string";
    }

    for(let i = 0; i < users.length; i++) {
        console.log(users[i].username);
        const supporter = users[i].supporter || false;
        const badges = users[i].badges || [1];
        const badgesAreValid = badges.every(arrayContainsStrings);
        const isValid = typeof users[i].username === "string" && typeof users[i].posts === "number" 
                    && typeof users[i].verified === "boolean" && typeof users[i].role === "string" 
                    && typeof supporter === "boolean";
    
        const validRole = roles.includes(users[i].role);
        console.log(isValid);
        console.log(badgesAreValid);
        console.log(validRole);
        
        if(!isValid || !badgesAreValid || !validRole){
            return false;
        }
    }
    return true;
}

module.exports = isValidSchema;