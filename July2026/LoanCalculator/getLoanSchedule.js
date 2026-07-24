//https://www.freecodecamp.org/learn/daily-coding-challenge/07-24
// Given a loan amount, annual interest rate percentage, and fixed monthly payment, return an array of remaining balances after each monthly payment until the loan is paid off.
//     Each month, interest is calculated on the remaining balance using the monthly interest rate: (annual rate / 100) / 12, then the monthly payment is subtracted.
//     Return each remaining balance rounded to the nearest dollar.
//     Include the loan amount in the returned array. The first element in the array will always be the loan amount, and the last element of the array will always be 0.

const getLoanSchedule = (loanAmount, annualRate, monthlyPayment) => {
    const repaymentSchedule = [loanAmount];
    while(loanAmount > 0) {
        let interest = loanAmount * ((annualRate / 100) / 12);
        loanAmount = loanAmount + interest;
        loanAmount = loanAmount - monthlyPayment;
        loanAmount = loanAmount < 0 ? 0 : loanAmount;
        repaymentSchedule.push(Math.round(loanAmount));
    }
    return repaymentSchedule;
}

module.exports = getLoanSchedule;