const getShadow = require('./getShadow');

describe('Given the time of day return the length of the shadow and the direction.', () => {
    test('1. getShadow("10:00") should return "8ft west".', () => {
        expect(getShadow("10:00")).toEqual("8ft west");
    });
    test('2. getShadow("15:00") should return "27ft east".', () => {
        expect(getShadow("15:00")).toEqual("27ft east");
    });
    test('3. getShadow("12:00") should return "No shadow".', () => {
        expect(getShadow("12:00")).toEqual("No shadow");
    });
    test('4. getShadow("17:30") should return "166.375ft east".', () => {
        expect(getShadow("17:30")).toEqual("166.375ft east");
    });
    test('5. getShadow("05:00") should return "No shadow".', () => {
        expect(getShadow("05:00")).toEqual("No shadow");
    });
    test('6. getShadow("06:00") should return "216ft west".', () => {
        expect(getShadow("06:00")).toEqual("216ft west");
    });
    test('7. getShadow("18:00") should return "No shadow".', () => {
        expect(getShadow("18:00")).toEqual("No shadow");
    });
    test('8. getShadow("07:30") should return "91.125ft west".', () => {
        expect(getShadow("07:30")).toEqual("91.125ft west");
    });
    test('9. getShadow("00:00") should return "No shadow".', () => {
        expect(getShadow("00:00")).toEqual("No shadow");
    });
})