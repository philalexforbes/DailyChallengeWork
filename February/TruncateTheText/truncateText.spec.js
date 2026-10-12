const truncateText = require('./truncateText');

describe('Verify if a string is over 20 characters that the first 17 characters only appear followed by ...(20 chars total)', () => {
    test('1. truncateText("Hello, world!") should return "Hello, world!".', () => {
        expect(truncateText("Hello, world!")).toEqual('Hello, world!');
    });
    test('2. truncateText("This string should get truncated.") should return "This string shoul...".', () => {
        expect(truncateText("This string should get truncated.")).toEqual('This string shoul...');
    });
    test('3. truncateText("Exactly twenty chars") should return "Exactly twenty chars".', () => {
        expect(truncateText("Exactly twenty chars")).toEqual('Exactly twenty chars');
    });
    test('4. truncateText(".....................") should return "....................".', () => {
        expect(truncateText(".....................")).toEqual('....................');
    });
})