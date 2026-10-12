const getDueDate = require('./getDueDate');

describe('Given a date return the date nine months in the future.', () => {
    test('1. getDueDate("2025-03-30") should return "2025-12-30".', () => {
        expect(getDueDate("2025-03-30")).toEqual("2025-12-30");
    });
    test('2. getDueDate("2025-04-27") should return "2026-01-27".', () => {
        expect(getDueDate("2025-04-27")).toEqual("2026-01-27");
    });
    test('3. getDueDate("2025-05-29") should return "2026-02-28".', () => {
        expect(getDueDate("2025-05-29")).toEqual("2026-02-28");
    });
    test('4. getDueDate("2026-06-30") should return "2027-03-30".', () => {
        expect(getDueDate("2026-06-30")).toEqual("2027-03-30");
    });
    test('5. getDueDate("2026-10-11") should return "2027-07-11".', () => {
        expect(getDueDate("2026-10-11")).toEqual("2027-07-11");
    });
});