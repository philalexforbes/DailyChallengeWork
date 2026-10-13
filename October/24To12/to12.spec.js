const to12 = require('./to12');

describe('Given four numbers in a string convert them to the 12 hour clock format.', () => {
    test('1. to12("1124") should return "11:24 AM".', () => {
        expect(to12("1124")).toEqual("11:24 AM");
    });
    test('2. to12("0900") should return "9:00 AM".', () => {
        expect(to12("0900")).toEqual("9:00 AM");
    });
    test('3. to12("1455") should return "2:55 PM".', () => {
        expect(to12("1455")).toEqual("2:55 PM");
    });
    test('4. to12("2346") should return "11:46 PM".', () => {
        expect(to12("2346")).toEqual("11:46 PM");
    });
    test('5. to12("0030") should return "12:30 AM".', () => {
        expect(to12("0030")).toEqual("12:30 AM");
    });
});