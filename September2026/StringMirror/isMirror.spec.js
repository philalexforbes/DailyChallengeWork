const isMirror = require('./isMirror');

describe('Given a string return if the string is a mirror of the other.', () => {
    test('1. isMirror("helloworld", "helloworld") should return false.', () => {
        expect(isMirror("helloworld", "helloworld")).toEqual(false);
    });
    test('2. isMirror("Hello World", "dlroW olleH") should return true.', () => {
        expect(isMirror("Hello World", "dlroW olleH")).toEqual(true);
    });
    test('3. isMirror("RaceCar", "raCecaR") should return true.', () => {
        expect(isMirror("RaceCar", "raCecaR")).toEqual(true);
    });
    test('4. isMirror("RaceCar", "RaceCar") should return false.', () => {
        expect(isMirror("RaceCar", "RaceCar")).toEqual(false);
    });
    test('5. isMirror("Mirror", "rorrim") should return false.', () => {
        expect(isMirror("Mirror", "rorrim")).toEqual(false);
    });
    test('6. isMirror("Hello World", "dlroW-olleH") should return true.', () => {
        expect(isMirror("Hello World", "dlroW-olleH")).toEqual(true);
    });
    test('7. isMirror("Hello World", "!dlroW !olleH") should return true.', () => {
        expect(isMirror("Hello World", "!dlroW !olleH")).toEqual(true);
    });
});