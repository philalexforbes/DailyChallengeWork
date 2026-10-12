const kaprekar = require('./kaprekar');

describe('Given a number determine how many times is needed to reach 6174.', () => {
    test('1. kaprekar(1234) should return 3.', () => {
        expect(kaprekar(1234)).toEqual(3);
    });
    test('2. kaprekar(2025) should return 6.', () => {
        expect(kaprekar(2025)).toEqual(6);
    });
    test('3. kaprekar(7173) should return 4.', () => {
        expect(kaprekar(7173)).toEqual(4);
    });
    test('4. kaprekar(3164) should return 7.', () => {
        expect(kaprekar(3164)).toEqual(7);
    });
    test('5. kaprekar(8082) should return 2.', () => {
        expect(kaprekar(8082)).toEqual(2);
    });
});