const convertToKgs = require('./convertToKgs');

describe('Return the correct weight in kgs from lbs', () => {
    test('convertToKgs(1) should return "1 pound equals 0.45 kilograms.".', () => {
        expect(convertToKgs(1)).toEqual('1 pound equals 0.45 kilograms.');
    });
    test('convertToKgs(0) should return "0 pounds equals 0.00 kilograms.".', () => {
        expect(convertToKgs(0)).toEqual('0 pounds equals 0.00 kilograms.');
    });
    test('convertToKgs(100) should return "100 pounds equals 45.36 kilograms.".', () => {
        expect(convertToKgs(100)).toEqual('100 pounds equals 45.36 kilograms.');
    });
    test('convertToKgs(2.5) should return "2.5 pounds equals 1.13 kilograms.".', () => {
        expect(convertToKgs(2.5)).toEqual('2.5 pounds equals 1.13 kilograms.');
    });
    test('convertToKgs(2.20462) should return "2.20462 pounds equals 1.00 kilogram.".', () => {
        expect(convertToKgs(2.20462)).toEqual('2.20462 pounds equals 1.00 kilogram.');
    });
})