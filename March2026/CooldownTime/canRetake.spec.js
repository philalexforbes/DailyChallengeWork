const canRetake = require('./canRetake');

describe('Given two time stamps one for finish time and the other the current time. Determine if 48 hours have passed so the user can retake.'
    , () => {
    test('1. canRetake("2026-03-23T08:00:00", "2026-03-25T14:00:00") should return true.', () => {
        expect(canRetake("2026-03-23T08:00:00", "2026-03-25T14:00:00")).toEqual(true);
    });
    test('2. canRetake("2026-03-24T14:00:00", "2026-03-25T10:00:00") should return false.', () => {
        expect(canRetake("2026-03-24T14:00:00", "2026-03-25T10:00:00")).toEqual(false);
    });
    test('3. canRetake("2026-03-23T09:25:00", "2026-03-25T09:25:00") should return true.', () => {
        expect(canRetake("2026-03-23T09:25:00", "2026-03-25T09:25:00")).toEqual(true);
    });
    test('4. canRetake("2026-03-23T11:50:00", "2026-03-25T11:49:59") should return false.', () => {
        expect(canRetake("2026-03-23T11:50:00", "2026-03-25T11:49:59")).toEqual(false);
    });
});