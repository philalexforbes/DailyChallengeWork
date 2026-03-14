const getPiDecimal = require('./getPiDecimal');

describe('Given an integer return the decimal place of pi that corresponds with that integer.', () => {
    test('1. getPiDecimal(5) should return 9.', () => {
        expect(getPiDecimal(5)).toEqual(9);
    });
    test('2. getPiDecimal(10) should return 5.', () => {
        expect(getPiDecimal(10)).toEqual(5);
    });
    test('3. getPiDecimal(22) should return 6.', () => {
        expect(getPiDecimal(22)).toEqual(6);
    });
    test('4. getPiDecimal(39) should return 7.', () => {
        expect(getPiDecimal(39)).toEqual(7);
    });
    test('5. getPiDecimal(76) should return 2.', () => {
        expect(getPiDecimal(76)).toEqual(2);
    });
    test('6. getPiDecimal(384) should return 4.', () => {
        expect(getPiDecimal(384)).toEqual(4);
    });
    test('7. getPiDecimal(601) should return 0.', () => {
        expect(getPiDecimal(601)).toEqual(0);
    });
    test('8. getPiDecimal(1000) should return 9.', () => {
        expect(getPiDecimal(1000)).toEqual(9);
    });
});