const isValidSchema = require('./isValidSchema');

describe('Verify if the schema object is valid.', () => {
    test('1. isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" }) should return true.', () => {
        expect(isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" })).toEqual(true);
    });
    test('2. isValidSchema({ username: "sara", posts: 45, verified: false, role: "creator", followers: 70 }) should return true.', () => {
        expect(isValidSchema({ username: "sara", posts: 45, verified: false, role: "creator", followers: 70 })).toEqual(true);
    });
    test('3. isValidSchema({ username: "penelope", posts: 20, verified: true, role: "admin" }) should return true.', () => {
        expect(isValidSchema({ username: "penelope", posts: 20, verified: true, role: "admin" })).toEqual(true);
    });
    test('4. isValidSchema({ username: "kevin", posts: 0, verified: false, role: "user" }) should return true.', () => {
        expect(isValidSchema({ username: "kevin", posts: 0, verified: false, role: "user" })).toEqual(true);
    });
    test('5. isValidSchema({ username: "george", posts: 15, verified: true, role: "moderator" }) should return true.', () => {
        expect(isValidSchema({ username: "george", posts: 15, verified: true, role: "moderator" })).toEqual(true);
    });
    test('6. isValidSchema({ username: "david", posts: 0, verified: false, role: "guest" }) should return false.', () => {
        expect(isValidSchema({ username: "david", posts: 0, verified: false, role: "guest" })).toEqual(false);
    });
    test('7. isValidSchema({ username: "wendy", posts: 10, verified: true }) should return false.', () => {
        expect(isValidSchema({ username: "wendy", posts: 10, verified: true })).toEqual(false);
    });
    test('8. isValidSchema({ username: "fabian", posts: 1, verified: true, role: true }) should return false.', () => {
        expect(isValidSchema({ username: "fabian", posts: 1, verified: true, role: true })).toEqual(false);
    });
    test('9. isValidSchema({ username: 8, posts: 1, verified: true, role: "user" }) should return false.', () => {
        expect(isValidSchema({ username: 8, posts: 1, verified: true, role: "user" })).toEqual(false);
    });
    test('10. isValidSchema({ username: "penny", posts: "10", verified: true, role: "staff" }) should return false.', () => {
        expect(isValidSchema({ username: "penny", posts: "10", verified: true, role: "staff" })).toEqual(false);
    });
    test('11. isValidSchema({ username: "john", posts: "1", verified: "true", role: "admin" }) should return false.', () => {
        expect(isValidSchema({ username: "john", posts: "1", verified: "true", role: "admin" })).toEqual(false);
    });
});