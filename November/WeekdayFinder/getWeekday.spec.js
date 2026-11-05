const getWeekday = require('./getWeekday');

describe('Given a date string return the day of the week for that date.', () => {
    test('1. getWeekday("2025-11-06") should return Thursday.', () => {
        expect(getWeekday("2025-11-06")).toEqual("Thursday");
    });
    test('2. getWeekday("1999-12-31") should return Friday.', () => {
        expect(getWeekday("1999-12-31")).toEqual("Friday");
    });
    test('3. getWeekday("1111-11-11") should return Saturday.', () => {
        expect(getWeekday("1111-11-11")).toEqual("Saturday");
    });
    test('4. getWeekday("2112-12-21") should return Wednesday.', () => {
        expect(getWeekday("2112-12-21")).toEqual("Wednesday");
    });
    test('5. getWeekday("2345-10-01") should return Monday.', () => {
        expect(getWeekday("2345-10-01")).toEqual("Monday");
    });
});