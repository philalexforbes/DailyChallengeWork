const isValidIsbn10 = require('./isValidIIsbn10');

describe('Determine if the str is a valid ISBN-10 number and return true or false.', () => {
    test('1. isValidIsbn10("0-306-40615-2") should return true.', () => {
        expect(isValidIsbn10("0-306-40615-2")).toEqual(true);
    });
    test('2. isValidIsbn10("0-306-40615-1") should return false.', () => {
        expect(isValidIsbn10("0-306-40615-1")).toEqual(false);
    });
    test('3. isValidIsbn10("0-8044-2957-X") should return true.', () => {
        expect(isValidIsbn10("0-8044-2957-X")).toEqual(true);
    });
    test('4. isValidIsbn10("X-306-40615-2") should return false.', () => {
        expect(isValidIsbn10("X-306-40615-2")).toEqual(false);
    });
    test('5. isValidIsbn10("0-6822-2589-4") should return true.', () => {
        expect(isValidIsbn10("0-6822-2589-4")).toEqual(true);
    });
});