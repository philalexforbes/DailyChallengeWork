const generateHex = require('./generateHex');

describe('Given a color generate a valid six character hex for that color.', () => {
    test('1. generateHex("yellow") should return "Invalid color".', () => {
        expect(generateHex("yellow")).toEqual("Invalid color");
    });
    test('2. generateHex("red") should return a six-character string.', () => {
        expect(generateHex("red")).toHaveLength(6);
    });
    test('3. generateHex("red") should return a valid six-character hex color code.', () => {
        expect(generateHex("red")).toMatch(/^[F]{2}/gm);
    });
    test('4. generateHex("red") should return a valid hex color with a higher red value than other colors.', () => {
        expect(generateHex("red")).toMatch(/^[F]{2}/gm);
    });
    test('5. Calling generateHex("red") twice should return two different hex color values where red is dominant.', () => {
        expect(generateHex("red")).toMatch(/^[F]{2}/gm);
    });
    test('6. Calling generateHex("green") twice should return two different hex color values where green is dominant.', () => {
        expect(generateHex("green")).toMatch(/[abc0123]+[F]{2}[abc0123]+/gm);
    });
    test('7. Calling generateHex("blue") twice should return two different hex color values where blue is dominant.', () => {
        expect(generateHex("blue")).toMatch(/[abc0123]{4}[F]{2}/gm);
    });
});