const piggyBank = require('./piggyBank');

describe('Given the contents of a piggy bank, return the amount in dollars and cents.', () => {
    test('1. piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 }) should return "$1.98".', () => {
        expect(piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 }))
        .toEqual("$1.98");
    });
    test('2. piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 }) should return "$0.41".', () => {
        expect(piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 }))
        .toEqual("$0.41");
    });
    test('3. piggyBank({ nickels: 8, dimes: 6, quarters: 5 }) should return "$2.25".', () => {
        expect(piggyBank({ nickels: 8, dimes: 6, quarters: 5 }))
        .toEqual("$2.25");
    });
    test('4. piggyBank({}) should return "$0.00".', () => {
        expect(piggyBank({}))
        .toEqual("$0.00");
    });
    test('5. piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 }) should return "$6.76".', () => {
        expect(piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 }))
        .toEqual("$6.76");
    });
});