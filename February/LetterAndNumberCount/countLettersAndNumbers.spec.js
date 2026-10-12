const countLettersAndNumbers = require('./countLettersAndNumbers');

describe('Return the correct number of letters and numbers from the input string.', () => {
    test('1. countLettersAndNumbers("helloworld123") should return "The string has 10 letters and 3 numbers.".', () => {
        expect(countLettersAndNumbers("helloworld123")).toEqual("The string has 10 letters and 3 numbers.");
    });
    test('2. countLettersAndNumbers("Catch 22") should return "The string has 5 letters and 2 numbers.".', () => {
        expect(countLettersAndNumbers("Catch 22")).toEqual("The string has 5 letters and 2 numbers.");
    });
    test('3. countLettersAndNumbers("A1!") should return "The string has 1 letter and 1 number.".', () => {
        expect(countLettersAndNumbers("A1!")).toEqual("The string has 1 letter and 1 number.");
    });
    test('4. countLettersAndNumbers("12345") should return "The string has 0 letters and 5 numbers.".', () => {
        expect(countLettersAndNumbers("12345")).toEqual("The string has 0 letters and 5 numbers.");
    });
    test('5. countLettersAndNumbers("password") should return "The string has 8 letters and 0 numbers.".', () => {
        expect(countLettersAndNumbers("password")).toEqual("The string has 8 letters and 0 numbers.");
    });
});