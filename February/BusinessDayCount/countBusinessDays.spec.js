const countBusinessDays = require('./countBusinessDays');

describe('Given a start date and an end date return the number of business days correctly.', () => {
    test('1. countBusinessDays("2026-02-24", "2026-02-26") should return 3.', () => {
        expect(countBusinessDays("2026-02-24", "2026-02-26")).toEqual(3);
    });
    test('2. countBusinessDays("2026-02-24", "2026-02-28") should return 4.', () => {
        expect(countBusinessDays("2026-02-24", "2026-02-28")).toEqual(4);
    });
    test('3. countBusinessDays("2026-02-21", "2026-03-01") should return 5.', () => {
        expect(countBusinessDays("2026-02-21", "2026-03-01")).toEqual(5);
    });
    test('4. countBusinessDays("2026-03-08", "2026-03-17") should return 7.', () => {
        expect(countBusinessDays("2026-03-08", "2026-03-17")).toEqual(7);
    });
    test('5. countBusinessDays("2026-02-24", "2027-02-24") should return 262.', () => {
        expect(countBusinessDays("2026-02-24", "2027-02-24")).toEqual(262);
    });
});