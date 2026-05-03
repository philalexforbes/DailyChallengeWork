const getGreeting = require('./getGreeting');

describe('Given a time of day return the proper greeting.', () => {
    test('1. getGreeting("06:30") should return "Good morning".', () => {
        expect(getGreeting("06:30")).toEqual("Good morning");
    });
    test('2. getGreeting("12:00") should return "Good afternoon".', () => {
        expect(getGreeting("12:00")).toEqual("Good afternoon");
    });
    test('3. getGreeting("21:59") should return "Good evening".', () => {
        expect(getGreeting("21:59")).toEqual("Good evening");
    });
    test('4. getGreeting("00:01") should return "Good night".', () => {
        expect(getGreeting("00:01")).toEqual("Good night");
    });
    test('5. getGreeting("11:30") should return "Good morning".', () => {
        expect(getGreeting("11:30")).toEqual("Good morning");
    });
});