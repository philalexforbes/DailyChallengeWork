const isGoldenRatio = require('./isGoldenRatio');

describe('Determine if the two numbers are close or equal to the golden ratio.', () => {
    test('1. isGoldenRatio(21, 34) should return true.', () => {
        expect(isGoldenRatio(21, 34)).toEqual(true);
    });
    test('2. isGoldenRatio(15, 20) should return false.', () => {
        expect(isGoldenRatio(15, 20)).toEqual(false);
    });
    test('3. isGoldenRatio(8, 13) should return true.', () => {
        expect(isGoldenRatio(8, 13)).toEqual(true);
    });
    test('4. isGoldenRatio(10, 16) should return false.', () => {
        expect(isGoldenRatio(10, 16)).toEqual(false);
    });
    test('5. isGoldenRatio(1618, 1000) should return true.', () => {
        expect(isGoldenRatio(1618, 1000)).toEqual(true);
    });
    test('6. isGoldenRatio(88, 55) should return false.', () => {
        expect(isGoldenRatio(88, 55)).toEqual(false);
    });
});