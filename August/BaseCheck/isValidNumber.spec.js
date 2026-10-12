const isValidNumber = require('./isValidNumber');

describe('Given a number and the base determine if the number is valid.', () => {
    test('1. isValidNumber("10101", 2) should return true.', () => {
        expect(isValidNumber("10101", 2)).toEqual(true);
    });
    test('2. isValidNumber("10201", 2) should return false.', () => {
        expect(isValidNumber("10201", 2)).toEqual(false);
    });
    test('3. isValidNumber("76543210", 8) should return true.', () => {
        expect(isValidNumber("76543210", 8)).toEqual(true);
    });
    test('4. isValidNumber("9876543210", 8) should return false.', () => {
        expect(isValidNumber("9876543210", 8)).toEqual(false);
    });
    test('5. isValidNumber("9876543210", 10) should return true.', () => {
        expect(isValidNumber("9876543210", 10)).toEqual(true);
    });
    test('6. isValidNumber("ABC", 10) should return false.', () => {
        expect(isValidNumber("ABC", 10)).toEqual(false);
    });
    test('7. isValidNumber("ABC", 16) should return true.', () => {
        expect(isValidNumber("ABC", 16)).toEqual(true);
    });
    test('8. isValidNumber("Z", 36) should return true.', () => {
        expect(isValidNumber("Z", 36)).toEqual(true);
    });
    test('9. isValidNumber("ABC", 20) should return true.', () => {
        expect(isValidNumber("ABC", 20)).toEqual(true);
    });
    test('10. isValidNumber("4B4BA9", 16) should return true.', () => {
        expect(isValidNumber("4B4BA9", 16)).toEqual(true);
    });
    test('11. isValidNumber("5G3F8F", 16) should return false.', () => {
        expect(isValidNumber("5G3F8F", 16)).toEqual(false);
    });
    test('12. isValidNumber("5G3F8F", 17) should return true.', () => {
        expect(isValidNumber("5G3F8F", 17)).toEqual(true);
    });
    test('13. isValidNumber("abc", 10) should return false.', () => {
        expect(isValidNumber("abc", 10)).toEqual(false);
    });
    test('14. isValidNumber("abc", 16) should return true.', () => {
        expect(isValidNumber("abc", 16)).toEqual(true);
    });
    test('15. isValidNumber("AbC", 16) should return true.', () => {
        expect(isValidNumber("AbC", 16)).toEqual(true);
    });
    test('16. isValidNumber("z", 36) should return true.', () => {
        expect(isValidNumber("z", 36)).toEqual(true);
    }); 
});