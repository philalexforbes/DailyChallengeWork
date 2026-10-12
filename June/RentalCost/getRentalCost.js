//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-19
// Given a rental timestamp, a return timestamp, and a rental tier, return the total cost of the rental including any late fees.

//     Given timestamps are UTC ISO strings, for example: "2026-06-18T18:30:00Z".
//     The rental tier is the number of days before the rental is due back: 1, 3, or 7.
//     Rentals are due back by 12:00 PM UTC or earlier on the last day of the rental period. For example, a 1-day rental checked out at any time on March 15 is due back by 12:00 PM UTC on March 16.
//     Each day past the due date and time incurs a late fee.

// Pricing is as follows:
// Tier 	Base cost 	Late fee per day
// 1 day 	$4.99 	$3.99
// 3 days 	$3.99 	$2.99
// 7 days 	$2.99 	$0.99

// Return the total cost rounded to two decimal places in the format "$D.CC".

const getRentalCost = (rented, returned, tier) => {
    const rentalTiers = {
        1: {
            "base": 4.99,
            "late": 3.99
        },
        3: {
            "base": 3.99,
            "late": 2.99
        },
        7: {
            "base": 2.99,
            "late": 0.99
        }
    }

    let cost = 0;
    let lateDays = 0;
    const rentedDate = new Date(rented);
    const returnedDate = new Date(returned);
    const rentedDay = rentedDate.getDate();
    const returnedDay = returnedDate.getDate();
    const returnedHours = returnedDate.getUTCHours();
    const returnedYear = returnedDate.getFullYear();
    const rentedYear = rentedDate.getFullYear();
    const differenceInDays = returnedDay - rentedDay;
    const diff = returnedDay - rentedDay;

    if(returnedYear !== rentedYear) {
        lateDays = 365 - tier;
        lateDays = returnedHours > 12 ? lateDays + 1 : lateDays;
    }
    else if (diff > tier) {
        lateDays = lateDays + (diff - tier);
        lateDays = returnedHours >= 12 ? lateDays + 1 : lateDays;
    }
    else {
        lateDays = diff > tier ? diff - tier : 0;
    }

    cost = rentalTiers[tier].base + cost;
    let lateFee = rentalTiers[tier].late * lateDays;
    cost = cost + lateFee;

    return `$${cost.toFixed(2)}`;
}

module.exports = getRentalCost;