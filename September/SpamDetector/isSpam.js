//https://www.freecodecamp.org/learn/daily-coding-challenge/09-27
// Given a phone number in the format "+A (BBB) CCC-DDDD", 
// where each letter represents a digit as follows:
//     A represents the country code and can be any number of digits.
//     BBB represents the area code and will always be three digits.
//     CCC and DDDD represent the local number and will always be three and four digits long, respectively.
// Determine if it's a spam number based on the following criteria:
//     The country code is greater than 2 digits long or doesn't begin with a zero (0).
//     The area code is greater than 900 or less than 200.
//     The sum of first three digits of the local number appears within last four digits of the local number.
//     The number has the same digit four or more times in a row (ignoring the formatting characters).

const isSpam = number => {
    const countryRegex = /(?<=\+)(\d{1,})/gm;
    const areaCodeRegex = /(?<=\()(\d{1,})/gm;
    const firstLocalNumberRegex = /(?<=\s)(\d{1,})/gm;
    const secondLocalNumberRegex = /(?<=\-)(\d{1,})/gm;
    const countryCode = number.match(countryRegex)[0];
    const areaCode = number.match(areaCodeRegex)[0];
    const firstLocalNumber = number.match(firstLocalNumberRegex)[0];
    const secondLocalNumber = number.match(secondLocalNumberRegex)[0];
    const sumOfFirst = Number(firstLocalNumber[0]) + Number(firstLocalNumber[1]) + Number(firstLocalNumber[2]);
    const allNumbers = `${countryCode}${areaCode}${firstLocalNumber}${secondLocalNumber}`;
    let repeatingDigits = false;

    for(let i = 0; i < allNumbers.length; i++) {
        let regex = new RegExp(`[${allNumbers[i]}]{4,}`, 'gm');
        let match = allNumbers.match(regex) || [];
        if(match.length === 1) {
            repeatingDigits = true;
            break;
        }
    }

    if(countryCode.length > 2 || countryCode[0] !== '0') {
        return true;
    }
    else if(Number(areaCode) < 200 || Number(areaCode) > 900){
        return true;
    }
    else if(secondLocalNumber.includes(String(sumOfFirst))) {
        return true;
    }
    else if(repeatingDigits){
        return true;
    }

    return false;
}

module.exports = isSpam;