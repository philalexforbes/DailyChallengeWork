const rgbToHex = require('./rgbToHex');

describe('Given an RGB value in an array return the HEX value for the color.', () => {
    test('1. rgbToHex("rgb(255, 255, 255)") should return "#ffffff".', () => {
        expect(rgbToHex("rgb(255, 255, 255)")).toEqual("#ffffff");
    });
    test('2. rgbToHex("rgb(1, 11, 111)") should return "#010b6f".', () => {
        expect(rgbToHex("rgb(1, 11, 111)")).toEqual("#010b6f");
    });
    test('3. rgbToHex("rgb(173, 216, 230)") should return "#add8e6".', () => {
        expect(rgbToHex("rgb(173, 216, 230)")).toEqual("#add8e6");
    });
    test('4. rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9".', () => {
        expect(rgbToHex("rgb(79, 123, 201)")).toEqual("#4f7bc9");
    });
});