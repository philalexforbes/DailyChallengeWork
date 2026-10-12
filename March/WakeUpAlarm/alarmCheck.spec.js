const alarmCheck = require('./alarmCheck');

describe('Given the alarm time and the wake up time return if the waking time is early, on time, or late.', () => {
    test('1. alarmCheck("07:00", "06:45") should return "early".', () => {
        expect(alarmCheck("07:00", "06:45")).toEqual("early");
    });
    test('2. alarmCheck("06:30", "06:30") should return "on time".', () => {
        expect(alarmCheck("06:30", "06:30")).toEqual("on time");
    });
    test('3. alarmCheck("08:10", "08:15") should return "on time".', () => {
        expect(alarmCheck("08:10", "08:15")).toEqual("on time");
    });
    test('4. alarmCheck("09:30", "09:45") should return "late".', () => {
        expect(alarmCheck("09:30", "09:45")).toEqual("late");
    });
    test('5. alarmCheck("08:15", "08:25") should return "on time".', () => {
        expect(alarmCheck("08:15", "08:25")).toEqual("on time");
    });
    test('6. alarmCheck("05:45", "05:56") should return "late".', () => {
        expect(alarmCheck("05:45", "05:56")).toEqual("late");
    });
    test('7. alarmCheck("04:30", "04:00") should return "early".', () => {
        expect(alarmCheck("04:30", "04:00")).toEqual("early");
    });
});