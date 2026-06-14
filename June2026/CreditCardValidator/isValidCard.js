//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-14
// Given a string of digits for a credit card number, determine if it's a valid card number using the following method:
//     Starting from the second-to-last digit, double every other digit moving left.
//     If doubling a digit results in a number greater than 9, subtract 9.
//     Sum all the digits (doubled and undoubled).
//     If the total is divisible by 10, the number is valid.

const isValidCreditCard = (number) => {
    let card = 0;
    let iterat = 1;

    for(let i = number.length - 1; i >= 0; i--) {
        let currentNum = Number(number[i]);
        currentNum = iterat % 2 === 0 ? currentNum * 2 : currentNum;
        currentNum = currentNum > 9 ? currentNum - 9 : currentNum;
        card = card + currentNum;
        iterat = iterat + 1;
    }

    return card % 10 === 0;
}

module.exports = isValidCreditCard;