//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-24
// Given a start date and an end date, return the number of business days between the two.
//     Given dates are in the format "YYYY-MM-DD".
//     Weekdays are business days (Monday through Friday).
//     Weekends are not business days (Saturday and Sunday).
//     Include both the start and end dates when counting.

const countBusinessDays = (start, end) => {
    let businessDays = 0;
    start = new Date(start);
    end = new Date(end);
    if(start.getUTCDay() === 0) {
      businessDays +=1
    }
    while(start <= end) {
        if((start.getUTCDay() !== 6) && start.getUTCDay() !== 0){
            businessDays += 1;
        }
        start.setDate(start.getDate() + 1);
    }
    return businessDays;
}

module.exports = countBusinessDays;