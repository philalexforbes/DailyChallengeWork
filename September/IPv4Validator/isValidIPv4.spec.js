const isValidIPv4 = require('./isValidIPv4');

describe('Given a string that represents an IPv4 address return if it is valid or not.', () => {
    test('1. isValidIPv4("192.168.1.1") should return true.', () => {
        expect(isValidIPv4("192.168.1.1")).toEqual(true);
    });
    test('2. isValidIPv4("0.0.0.0") should return true.', () => {
        expect(isValidIPv4("0.0.0.0")).toEqual(true);
    });
    test('3. isValidIPv4("255.01.50.111") should return false.', () => {
        expect(isValidIPv4("255.01.50.111")).toEqual(false);
    });
    test('4. isValidIPv4("255.00.50.111") should return false.', () => {
        expect(isValidIPv4("255.00.50.111")).toEqual(false);
    });
    test('5. isValidIPv4("256.101.50.115") should return false.', () => {
        expect(isValidIPv4("256.101.50.115")).toEqual(false);
    });
    test('6. isValidIPv4("192.168.101.") should return false.', () => {
        expect(isValidIPv4("192.168.101.")).toEqual(false);
    });
    test('7. isValidIPv4("192168145213") should return false.', () => {
        expect(isValidIPv4("192168145213")).toEqual(false);
    });
});