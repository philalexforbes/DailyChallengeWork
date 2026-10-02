//https://www.freecodecamp.org/learn/daily-coding-challenge/09-05
// Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

//     It is between 0 and 255 inclusive.
//     It does not have leading zeros (e.g. 0 is allowed, 01 is not).
//     Only numeric characters are allowed.

const isValidIPv4 = ipv4 => {
    const regex = /^\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}$/gm;
    const zeroRegex = /[0]{1}[1-9]|[0]{2,3}\./gm;
    if(!regex.test(ipv4)) {
        return false;
    }
    else if(zeroRegex.test(ipv4)){
        return false;
    }
    else{
        return true;
    }
}

module.exports = isValidIPv4;