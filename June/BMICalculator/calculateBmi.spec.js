const calculateBmi = require('./calculateBmi');

describe('Given a user\'s weight and height return the correct BMI to the tenth place.', () => {
    test('1. calculateBmi(180, 70) should return 25.8.', () => {
        expect(calculateBmi(180, 70)).toEqual(25.8);
    });
    test('2. calculateBmi(140, 64) should return 24.0.', () => {
        expect(calculateBmi(140, 64)).toEqual(24.0);
    });
    test('3. calculateBmi(160, 76) should return 19.5.', () => {
        expect(calculateBmi(160, 76)).toEqual(19.5);
    });
    test('4. calculateBmi(200, 60) should return 39.1.', () => {
        expect(calculateBmi(200, 60)).toEqual(39.1);
    });
    test('5. calculateBmi(150, 68) should return 22.8.', () => {
        expect(calculateBmi(150, 68)).toEqual(22.8);
    });
});