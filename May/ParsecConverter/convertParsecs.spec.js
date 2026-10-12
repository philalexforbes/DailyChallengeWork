const convertParsecs = require('./convertParsecs');

describe('Given an integer convert it to parsecs and return the correct value.', () => {
    test('1. convertParsecs(1) should return 2.', () => {
        expect(convertParsecs(1)).toEqual(2);
    });
    test('2. convertParsecs(2) should return 6.', () => {
        expect(convertParsecs(2)).toEqual(6);
    });
    test('3. convertParsecs(31) should return 62.', () => {
        expect(convertParsecs(31)).toEqual(62);
    });
    test('4. convertParsecs(88) should return 264.', () => {
        expect(convertParsecs(88)).toEqual(264);
    });
    test('5. convertParsecs(17) should return 34.', () => {
        expect(convertParsecs(17)).toEqual(34);
    });
    test('6. convertParsecs(14) should return 42.', () => {
        expect(convertParsecs(14)).toEqual(42);
    });
});