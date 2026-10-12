const separateLettersAndNumbers = require('./separateLettersAndNumbers');

describe('Return a string that separates numbers from letters with a -', () => {
    test('1. separateLettersAndNumbers("ABC123") should return "ABC-123".', () => {
        expect(separateLettersAndNumbers("ABC123")).toEqual('ABC-123');
    });
    test('2. separateLettersAndNumbers("Route66") should return "Route-66.', () => {
        expect(separateLettersAndNumbers("Route66")).toEqual('Route-66');
    });
    test('3. separateLettersAndNumbers("H3LL0W0RLD") should return "H-3-LL-0-W-0-RLD".', () => {
        expect(separateLettersAndNumbers("H3LL0W0RLD")).toEqual('H-3-LL-0-W-0-RLD');
    });
    test('4. separateLettersAndNumbers("a1b2c3d4") should return "a-1-b-2-c-3-d-4".', () => {
        expect(separateLettersAndNumbers("a1b2c3d4")).toEqual('a-1-b-2-c-3-d-4');
    });
});