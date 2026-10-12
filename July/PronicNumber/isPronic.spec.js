const isPronic = require('./isPronic');

describe('Given a number determine if the number is pronic.', () => {
    test('1. isPronic(6) should return true.', () => {
        expect(isPronic(6)).toEqual(true);
    });
    test('2. isPronic(15) should return false.', () => {
        expect(isPronic(15)).toEqual(false);
    });
    test('3. isPronic(12) should return true.', () => {
        expect(isPronic(12)).toEqual(true);
    });
    test('4. isPronic(132) should return true.', () => {
        expect(isPronic(132)).toEqual(true);
    });
    test('5. isPronic(80) should return false.', () => {
        expect(isPronic(80)).toEqual(false);
    });
    test('6. isPronic(0) should return true.', () => {
        expect(isPronic(0)).toEqual(true);
    });
});