const makeLeet = require('./makeLeet');

describe('Given a string return the string with leet characters in it.', () => {
    test('1. makeLeet("cool") should return "c001".', () => {
        expect(makeLeet("cool")).toEqual("c001");
    });
    test('2. makeLeet("leet") should return "1337".', () => {
        expect(makeLeet("leet")).toEqual("1337");
    });
    test('3. makeLeet("hacker") should return "h4ck3r".', () => {
        expect(makeLeet("hacker")).toEqual("h4ck3r");
    });
    test('4. makeLeet("satellite") should return "547311173".', () => {
        expect(makeLeet("satellite")).toEqual("547311173");
    });
    test('5. makeLeet("abcdefghijklmnopqrstuvwxyz") should return "4bcd3f9h1jk1mn0pqr57uvwxyz".', () => {
        expect(makeLeet("abcdefghijklmnopqrstuvwxyz")).toEqual("4bcd3f9h1jk1mn0pqr57uvwxyz");
    });
});