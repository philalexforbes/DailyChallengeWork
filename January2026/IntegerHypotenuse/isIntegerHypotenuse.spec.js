const isIntegerHypotenuse = require('./isIntegerHypotenuse');

describe('Determine if the two numbers hypotenuse is an integer or not correctly', () => {
    test('1. isIntegerHypotenuse(3, 4) should return true.', () => {
        expect(isIntegerHypotenuse(3, 4)).toEqual(true);
    });
    test('2. isIntegerHypotenuse(2, 3) should return false.', () => {
        expect(isIntegerHypotenuse(2, 3)).toEqual(false);
    });
    test('3. isIntegerHypotenuse(5, 12) should return true.', () => {
        expect(isIntegerHypotenuse(5, 12)).toEqual(true);
    });
    test('4. isIntegerHypotenuse(10, 10) should return false.', () => {
        expect(isIntegerHypotenuse(10, 10)).toEqual(false);
    });
    test('5. isIntegerHypotenuse(780, 1040) should return true.', () => {
        expect(isIntegerHypotenuse(780, 1040)).toEqual(true);
    });
    test('6. isIntegerHypotenuse(250, 333) should return false.', () => {
        expect(isIntegerHypotenuse(250, 333)).toEqual(false);
    });
})