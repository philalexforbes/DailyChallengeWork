const getRotation = require('./getRotation');

describe('Given a number determine the first digit of rotation is divisible by the number of digits in the number.', () => {
    test('1. getRotation(123) should return 0.', () => {
        expect(getRotation(123)).toEqual(0);
    });
    test('2. getRotation(13579) should return 3.', () => {
        expect(getRotation(13579)).toEqual(3);
    });
    test('3. getRotation(24681) should return "none".', () => {
        expect(getRotation(24681)).toEqual("none");
    });
    test('4. getRotation(84138789345) should return 6.', () => {
        expect(getRotation(84138789345)).toEqual(6);
    });
});