const isValidIsbn13 = require('./isValidIsbn13');

describe('Return if if the input string is a valid ISBN-13 number.', () => {
    test('1. isValidIsbn13("9780306406157") should return true.', () => {
        expect(isValidIsbn13("9780306406157")).toEqual(true);
    });
    test('2. isValidIsbn13("97803064061570") should return false.', () => {
        expect(isValidIsbn13("97803064061570")).toEqual(false);
    });
    test('3. isValidIsbn13("978-0-13-595705-9") should return true.', () => {
        expect(isValidIsbn13("978-0-13-595705-9")).toEqual(true);
    });
    test('4. isValidIsbn13("978-030-64061A-4") should return false.', () => {
        expect(isValidIsbn13("978-030-64061A-4")).toEqual(false);
    });
    test('5. isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9") should return true.', () => {
        expect(isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9")).toEqual(true);
    });
});