const daysUntilBirthday = require('./daysUntilBirthday');

describe('Given a date and a birthday return the number of days until that birthday.', () => {
    test('1. daysUntilBirthday("2026-07-16", "9/7") should return 53.', () => {
        expect(daysUntilBirthday("2026-07-16", "9/7")).toEqual(53);
    });
    test('2. daysUntilBirthday("2026-07-16", "3/22") should return 249.', () => {
        expect(daysUntilBirthday("2026-07-16", "3/22")).toEqual(249);
    });
    test('3. daysUntilBirthday("2026-07-16", "7/16") should return 365.', () => {
        expect(daysUntilBirthday("2026-07-16", "7/16")).toEqual(365);
    });
    test('4. daysUntilBirthday("2024-02-28", "3/1") should return 2.', () => {
        expect(daysUntilBirthday("2024-02-28", "3/1")).toEqual(2);
    });
    test('5. daysUntilBirthday("2023-04-24", "12/30") should return 250.', () => {
        expect(daysUntilBirthday("2023-04-24", "12/30")).toEqual(250);
    });
    test('6. daysUntilBirthday("2024-03-01", "2/29") should return 1460.', () => {
        expect(daysUntilBirthday("2024-03-01", "2/29")).toEqual(1460);
    });
    test('7. daysUntilBirthday("2096-03-01", "2/29") should return 2920.', () => {
        expect(daysUntilBirthday("2096-03-01", "2/29")).toEqual(2920);
    });
});