const convertWords = require('./convertWords');

describe('Given a string of words return the correct length of each word in a string.', () => {
    test('1. convertWords("hello world") should return "5 5".', () => {
        expect(convertWords("hello world")).toEqual("5 5");
    });
    test('2. convertWords("Thanks and happy coding") should return "6 3 5 6".', () => {
        expect(convertWords("Thanks and happy coding")).toEqual("6 3 5 6");
    });
    test('3. convertWords("The quick brown fox jumps over the lazy dog") should return "3 5 5 3 5 4 3 4 3".', () => {
        expect(convertWords("The quick brown fox jumps over the lazy dog")).toEqual("3 5 5 3 5 4 3 4 3");
    });
    test('4. convertWords("Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl") should return "5 5 5 3 4 11 10 4 5 2 6 8 7 4 3 6 4".', () => {
        expect(convertWords("Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl")).toEqual("5 5 5 3 4 11 10 4 5 2 6 8 7 4 3 6 4");
    });
});