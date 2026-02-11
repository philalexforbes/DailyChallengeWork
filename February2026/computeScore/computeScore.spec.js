const computeScore = require('./computeScore');

describe('Verify the base score is correct after removing the first and last and subtracting penalties', () => {
    test('1. computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1) should return 64.', () => {
        expect(computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1)).toEqual(64);
    });
    test('2. computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) should return 80.', () => {
        expect(computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toEqual(80);
    });
    test('3. computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1) should return 67.', () => {
        expect(computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1)).toEqual(67);
    });
    test('4. computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0) should return 67.5.', () => {
        expect(computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0)).toEqual(67.5);
    });
    test('5. computeScore([6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0], 1.5, 0.5, 0.5) should return 59.', () => {
        expect(computeScore([6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0], 1.5, 0.5, 0.5)).toEqual(59);
    });
});