const isLeapYear = require('./isLeapYear');

describe('Determine if the year is a leap year or not', () => {
    test('1. isLeapYear(2024) should return true.', () => {
        expect(isLeapYear(2024)).toEqual(true);
    });
    test('2. isLeapYear(2023) should return false.', () => {
        expect(isLeapYear(2023)).toEqual(false);
    });
    test('3. isLeapYear(2100) should return false.', () => {
        expect(isLeapYear(2100)).toEqual(false);
    });
    test('4. isLeapYear(2000) should return true.', () => {
        expect(isLeapYear(2000)).toEqual(true);
    });
    test('5. isLeapYear(1999) should return false.', () => {
        expect(isLeapYear(1999)).toEqual(false);
    });
    test('6. isLeapYear(2040) should return true.', () => {
        expect(isLeapYear(2040)).toEqual(true);
    });
    test('7. isLeapYear(2026) should return false.', () => {
        expect(isLeapYear(2026)).toEqual(false);
    });
})