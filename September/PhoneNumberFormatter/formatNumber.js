//https://www.freecodecamp.org/learn/daily-coding-challenge/09-30
// Given a string of eleven digits, 
// return the string as a phone number in this format: "+D (DDD) DDD-DDDD".

const formatNumber = number => {
    return `+${number[0]} (${number.substring(1,4)}) ${number.substring(4,7)}-${number.substring(7)}`;
}

module.exports = formatNumber;