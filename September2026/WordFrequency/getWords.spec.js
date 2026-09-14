const getWords = require('./getWords');

describe('Given a paragraph return the three most common words.', () => {
    test('1. getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding") should return ["coding", "python", "in"].', () => {
        expect(getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding"))
        .toEqual(["coding", "python", "in"]);
    });
    test('2. getWords("I like coding. I like testing. I love debugging!") should return ["i", "like", "coding"].', () => {
        expect(getWords("I like coding. I like testing. I love debugging!"))
        .toEqual(["i", "like", "coding"]);
    });
    test('3. getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!") should return ["debug", "test", "deploy"].', () => {
        expect(getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"))
        .toEqual(["debug", "test", "deploy"]);
    });
});