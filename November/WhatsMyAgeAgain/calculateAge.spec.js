const calculateAge = require('./calculateAge');

describe('Given a date return the person\'s age as of 11/27/2025.', () => {
    test('1. calculateAge("2000-11-20") should return 25.', () => {
        expect(calculateAge("2000-11-20")).toEqual(25);
    });
    test('2. calculateAge("2000-12-01") should return 24.', () => {
        expect(calculateAge("2000-12-01")).toEqual(24);
    });
    test('3. calculateAge("2014-10-25") should return 11.', () => {
        expect(calculateAge("2014-10-25")).toEqual(11);
    });
    test('4. calculateAge("1994-01-06") should return 31.', () => {
        expect(calculateAge("1994-01-06")).toEqual(31);
    });
    test('5. calculateAge("1994-12-14") should return 30.', () => {
        expect(calculateAge("1994-12-14")).toEqual(30);
    });
});