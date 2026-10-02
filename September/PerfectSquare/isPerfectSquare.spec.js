const isPerfectSquare = require('./isPerfectSquare');

describe('Given a number determine if it is a perfect square.', () => {
    test('1. isPerfectSquare(9) should return true.', () => {
        expect(isPerfectSquare(9)).toEqual(true);
    });
    test('2. isPerfectSquare(49) should return true.', () => {
        expect(isPerfectSquare(49)).toEqual(true);
    });
    test('3. isPerfectSquare(1) should return true.', () => {
        expect(isPerfectSquare(1)).toEqual(true);
    });
    test('4. isPerfectSquare(2) should return false.', () => {
        expect(isPerfectSquare(2)).toEqual(false);
    });
    test('5. isPerfectSquare(99) should return false.', () => {
        expect(isPerfectSquare(99)).toEqual(false);
    });
    test('6. isPerfectSquare(-9) should return false.', () => {
        expect(isPerfectSquare(-9)).toEqual(false);
    });
    test('7. isPerfectSquare(0) should return true.', () => {
        expect(isPerfectSquare(0)).toEqual(true);
    });
    test('8. isPerfectSquare(25281) should return true.', () => {
        expect(isPerfectSquare(25281)).toEqual(true);
    });
});