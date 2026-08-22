const milePace = require('./milePace');

describe('Given a time for mile(s) run, return the pace.', () => {
    test('1. milePace(3, "24:00") should return "08:00".', () => {
        expect(milePace(3, "24:00")).toEqual("08:00");
    });
    test('2. milePace(1, "06:45") should return "06:45".', () => {
        expect(milePace(1, "06:45")).toEqual("06:45");
    });
    test('3. milePace(2, "07:00") should return "03:30".', () => {
        expect(milePace(2, "07:00")).toEqual("03:30");
    });
    test('4. milePace(26.2, "120:35") should return "04:36".', () => {
        expect(milePace(26.2, "120:35")).toEqual("04:36");
    });
});