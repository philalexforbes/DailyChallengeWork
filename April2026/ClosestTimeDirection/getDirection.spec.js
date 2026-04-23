const getDirection = require('./getDirection');

describe('Given two times determine if the time can be moved to in backwards, forwards, or in equal time in the shortest time.', () => {
    test('1. getDirection("10:00", "12:00") should return "forward".', () => {
        expect(getDirection("10:00", "12:00")).toEqual("forward");
    });
    test('2. getDirection("11:00", "05:00") should return "backward".', () => {
        expect(getDirection("11:00", "05:00")).toEqual("backward");
    });
    test('3. getDirection("00:00", "12:00") should return "equal".', () => {
        expect(getDirection("00:00", "12:00")).toEqual("equal");
    });
    test('4. getDirection("15:45", "01:10") should return "forward".', () => {
        expect(getDirection("15:45", "01:10")).toEqual("forward");
    });
    test('5. getDirection("03:30", "19:50") should return "backward".', () => {
        expect(getDirection("03:30", "19:50")).toEqual("backward");
    });
    test('6. getDirection("06:30", "18:30") should return "equal".', () => {
        expect(getDirection("06:30", "18:30")).toEqual("equal");
    });
});