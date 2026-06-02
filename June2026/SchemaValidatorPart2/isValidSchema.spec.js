const isValidSchema = require('./isValidSchema');

describe('Given an object verify that the schema is as expected.', () => {
    test('1. isValidSchema({ username: "alice", posts: 10, verified: false }) should return true.', () => {
        expect(isValidSchema({ username: "alice", posts: 10, verified: false })).toEqual(true);
    });
    test('2. isValidSchema({ username: "carol", posts: 15, verified: true, followers: 25 }) should return true.', () => {
        expect(isValidSchema({ username: "carol", posts: 15, verified: true, followers: 25 })).toEqual(true);
    });
    test('3. isValidSchema({ username: "frank", posts: "21", verified: true }) should return false.', () => {
        expect(isValidSchema({ username: "frank", posts: "21", verified: true })).toEqual(false);
    });
    test('4. isValidSchema({ username: "sam", posts: 17, verified: "false" }) should return false.', () => {
        expect(isValidSchema({ username: "sam", posts: 17, verified: "false" })).toEqual(false);
    });
    test('5. isValidSchema({ username: "bill", verified: true }) should return false.', () => {
        expect(isValidSchema({ username: "bill", verified: true })).toEqual(false);
    });
    test('6. isValidSchema({ username: "fred", verified: true }) should return false.', () => {
        expect(isValidSchema({ username: "fred", verified: true })).toEqual(false);
    });
    test('7. isValidSchema({ username: 5, posts: 10, verified: true }) should return false.', () => {
        expect(isValidSchema({ username: 5, posts: 10, verified: true })).toEqual(false);
    });
});