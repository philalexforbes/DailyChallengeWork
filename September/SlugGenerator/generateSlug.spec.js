const generateSlug = require('./generateSlug');

describe('Given a string strip out the required characters and replace spaces with %20', () => {
    test('1. generateSlug("helloWorld") should return "helloworld".', () => {
        expect(generateSlug("helloWorld")).toEqual("helloworld");
    });
    test('2. generateSlug("hello world!") should return "hello%20world".', () => {
        expect(generateSlug("hello world!")).toEqual("hello%20world");
    });
    test('3. generateSlug(" hello-world ") should return "helloworld".', () => {
        expect(generateSlug(" hello-world ")).toEqual("helloworld");
    });
    test('4. generateSlug("hello  world") should return "hello%20world".', () => {
        expect(generateSlug("hello  world")).toEqual("hello%20world");
    });
    test('5. generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ") should return "h3110%20w0r1d".', () => {
        expect(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ")).toEqual("h3110%20w0r1d");
    });
});