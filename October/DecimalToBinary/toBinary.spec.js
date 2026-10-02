const toBinary = require('./toBinary');

describe('Given a number return the binary version of it.', () => {
    test('1. toBinary(5) should return "101".', () => {
        expect(toBinary(5)).toEqual("101");
    });
    test('2. toBinary(12) should return "1100".', () => {
        expect(toBinary(12)).toEqual("1100");
    });
    test('3. toBinary(50) should return "110010".', () => {
        expect(toBinary(50)).toEqual("110010");
    });
    test('4. toBinary(99) should return "1100011".', () => {
        expect(toBinary(99)).toEqual("1100011");
    });
});