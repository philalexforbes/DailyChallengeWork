const getDayOfWeek = require('./getDayOfWeek');

describe('Given a UNIX time stamp return the day of the week.', () => {
    test('1. getDayOfWeek(1775492249000) should return "Monday".', () => {
        expect(getDayOfWeek(1775492249000)).toEqual("Monday");
    });
    test('2. getDayOfWeek(1766246400000) should return "Saturday".', () => {
        expect(getDayOfWeek(1766246400000)).toEqual("Saturday");
    });
    test('3. getDayOfWeek(33791256000000) should return "Tuesday".', () => {
        expect(getDayOfWeek(33791256000000)).toEqual("Tuesday");
    });
    test('4. getDayOfWeek(1773576000000) should return "Sunday".', () => {
        expect(getDayOfWeek(1773576000000)).toEqual("Sunday");
    });
    test('5. getDayOfWeek(0) should return "Thursday".', () => {
        expect(getDayOfWeek(0)).toEqual("Thursday");
    });
});