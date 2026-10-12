const roundToNearestMultiple = require('./roundToNearestMultiple');

describe('Given two integers return the nearest multiple of the second integer.', () => {
    test('1. roundToNearestMultiple(5, 3) should return 6.', () => {
        expect(roundToNearestMultiple(5, 3)).toEqual(6);
    });
    test('2. roundToNearestMultiple(17, 4) should return 16.', () => {
        expect(roundToNearestMultiple(17, 4) ).toEqual(16);
    });
    test('3. roundToNearestMultiple(43, 5) should return 45.', () => {
        expect(roundToNearestMultiple(43, 5)).toEqual(45);
    });
    test('4. roundToNearestMultiple(38, 11) should return 33.', () => {
        expect(roundToNearestMultiple(38, 11)).toEqual(33);
    });
    test('5. roundToNearestMultiple(93, 12) should return 96.', () => {
        expect(roundToNearestMultiple(93, 12)).toEqual(96);
    });
});