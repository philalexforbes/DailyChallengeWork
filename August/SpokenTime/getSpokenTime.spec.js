const getSpokenTime = require('./getSpokenTime');

describe('Given angles of the clock hands return the correct spoken time.', () => {
    test('1. getSpokenTime(90, 0) should return "3 o\'clock".', () => {
        expect(getSpokenTime(90, 0)).toEqual("3 o'clock");
    });
    test('2. getSpokenTime(160, 120) should return "20 minutes past 5".', () => {
        expect(getSpokenTime(160, 120)).toEqual("20 minutes past 5");
    });
    test('3. getSpokenTime(255, 180) should return "half past 8".', () => {
        expect(getSpokenTime(255, 180)).toEqual("half past 8");
    });
    test('4. getSpokenTime(67.5, 92) should return "quarter past 2".', () => {
        expect(getSpokenTime(67.5, 92)).toEqual("quarter past 2");
    });
    test('5. getSpokenTime(200, 240) should return "20 minutes to 7".', () => {
        expect(getSpokenTime(200, 240)).toEqual("20 minutes to 7");
    });
    test('6. getSpokenTime(322.5, 273) should return "quarter to 11".', () => {
        expect(getSpokenTime(322.5, 273)).toEqual("quarter to 11");
    });
    test('7. getSpokenTime(117.5, 335) should return "5 minutes to 4".', () => {
        expect(getSpokenTime(117.5, 335)).toEqual("5 minutes to 4");
    });
});