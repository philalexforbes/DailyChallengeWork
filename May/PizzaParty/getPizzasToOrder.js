//https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-27
// Given an array of hours worked today per person, return the number of pizzas to order for a pizza party.
//     Divide each person's hours worked by 3 to get their slice count.
//     You can't eat a partial slice, so round each person's slice count up to the nearest whole number.
//     Each person gets a minimum of two slices.
//     Each pizza has 8 slices. Round the total number of pizzas up to the nearest whole pizza.

const getPizzasToOrder = (hoursWorked) => {
    let slices = 0;
    for(const hour of hoursWorked) {
        let slicePerPerson = Math.ceil(hour/3) < 2 ? 2 : Math.ceil(hour/3);
        slices = slices + slicePerPerson;
    }
    return Math.ceil(slices / 8);
}

module.exports = getPizzasToOrder;