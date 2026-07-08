//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-08
// Given a number of milliseconds since the last post on an issue, and the last message posted on the issue, determine what you should do with the issue according to these rules:
//     If the last message is less than 7 days ago, return "leave it"
//     If the last message is 7 or more days ago and its content contains "bump" (case-insensitive), return "close it"
//     Otherwise, return "bump it"

const triageIssue = (ms, message) => {
    const days = ms / 86400000;
    if(days < 7) {
        return 'leave it';
    }
    else if(days >= 7 && message.toLowerCase().includes('bump')) {
        return 'close it';
    }
    else {
        return 'bump it';
    }
} 

module.exports = triageIssue;