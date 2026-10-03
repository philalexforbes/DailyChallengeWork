const checkStrength = require('./checkStrength');

describe('Check the strength of the given password.', () => {
    test('1. checkStrength("123456") should return "weak".', () => {
        expect(checkStrength("123456")).toEqual("weak");
    });
    test('2. checkStrength("pass!!!") should return "weak".', () => {
        expect(checkStrength("pass!!!")).toEqual("weak");
    });
    test('3. checkStrength("Qwerty") should return "weak".', () => {
        expect(checkStrength("Qwerty")).toEqual("weak");
    });
    test('4. checkStrength("PASSWORD") should return "weak".', () => {
        expect(checkStrength("PASSWORD")).toEqual("weak");
    });
    test('5. checkStrength("PASSWORD!") should return "medium".', () => {
        expect(checkStrength("PASSWORD!")).toEqual("medium");
    });
    test('6. checkStrength("PassWord%^!") should return "medium".', () => {
        expect(checkStrength("PassWord%^!")).toEqual("medium");
    });
    test('7. checkStrength("qwerty12345") should return "medium".', () => {
        expect(checkStrength("qwerty12345")).toEqual("medium");
    });
    test('8. checkStrength("S3cur3P@ssw0rd") should return "strong".', () => {
        expect(checkStrength("S3cur3P@ssw0rd")).toEqual("strong");
    });
    test('9. checkStrength("C0d3&Fun!") should return "strong".', () => {
        expect(checkStrength("C0d3&Fun!")).toEqual("strong");
    });
});