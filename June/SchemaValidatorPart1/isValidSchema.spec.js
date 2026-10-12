const isValidSchema = require('./isValidSchema');

describe('Return if the schema is valid.', () => {
    test('1. isValidSchema({ username: "bob" }) should return true.', () => {
        expect(isValidSchema({ username: "bob" })).toEqual(true);
    });
    test('2. isValidSchema({ username: "jen", posts: 30 }) should return true.', () => {
        expect(isValidSchema({ username: "jen", posts: 30 })).toEqual(true);
    });
    test('3. isValidSchema({ username: "" }) should return true.', () => {
        expect(isValidSchema({ username: "" })).toEqual(true);
    });
    test('4. isValidSchema({ username: 7 }) should return false.', () => {
        expect(isValidSchema({ username: 7 })).toEqual(false);
    });
    test('5. isValidSchema({ posts: 25 }) should return false.', () => {
        expect(isValidSchema({ posts: 25 })).toEqual(false);
    });
});