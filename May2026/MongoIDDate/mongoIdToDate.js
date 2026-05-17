//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-17
// Given a MongoDB ID string, return its creation time as an ISO 8601 string.
// A MongoDB ID is a 24-character hex string. The first 8 characters represent a Unix timestamp (in seconds) encoded as a base-16 integer.
// For example, "6a094b50bcf86cd799439011" has a timestamp of "6a094b50" in hex, which is 1778994000 in decimal, representing a creation time of "2026-05-17T05:00:00.000Z".

const mongoIdToDate = (id) => {
    //for a hexadecimal conersion the id to 16 bit works
    const timeStampHex = parseInt(id.slice(0,8), 16);
    //time stamp must start at the epoch
    let timeStamp = new Date('1970-01-01 00:00:00').setSeconds(timeStampHex);
    timeStamp = new Date(timeStamp);
    //we need to grab the hours initially for later
    let hour = new Date(timeStamp).getHours();
    //offsetting the UTC conversion below
    timeStamp = timeStamp.setUTCHours(hour);
    return new Date(timeStamp).toISOString();
}

module.exports = mongoIdToDate;