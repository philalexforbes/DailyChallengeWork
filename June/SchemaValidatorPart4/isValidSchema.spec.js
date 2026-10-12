const isValidSchema = require('./isValidSchema');

describe('Verify if the schema is valid.', () => {
    test('1. isValidSchema({ username: "vivian", posts: 1, verified: false, role: "user", supporter: true }) should return true.', () => {
        expect(isValidSchema({ username: "vivian", posts: 1, verified: false, role: "user", supporter: true })).toEqual(true);
    });
    test('2. isValidSchema({ username: "rudolph", posts: 15, verified: true, role: "creator" }) should return true.', () => {
        expect(isValidSchema({ username: "rudolph", posts: 15, verified: true, role: "creator" })).toEqual(true);
    });
    test('3. isValidSchema({ username: "hernandez", posts: 35, verified: true, role: "moderator", supporter: false, followers: 55 }) should return true.', () => {
        expect(isValidSchema({ username: "hernandez", posts: 35, verified: true, role: "moderator", supporter: false, followers: 55 })).toEqual(true);
    });
    test('4. isValidSchema({ username: "julia", posts: 50, verified: true, role: "admin", supporter: "true" }) should return false.', () => {
        expect(isValidSchema({ username: "julia", posts: 50, verified: true, role: "admin", supporter: "true" })).toEqual(false);
    });
    test('5. isValidSchema({ username: "bernard", posts: 0, verified: true, role: "friend", supporter: true }) should return false.', () => {
        expect(isValidSchema({ username: "bernard", posts: 0, verified: true, role: "friend", supporter: true })).toEqual(false);
    });
    test('6. isValidSchema({ username: "felix", posts: 40, verified: "yes", role: "staff", supporter: false }) should return false.', () => {
        expect(isValidSchema({ username: "felix", posts: 40, verified: "yes", role: "staff", supporter: false })).toEqual(false);
    });
    test('7. isValidSchema({ username: "jimmy", posts: true, verified: false, role: "creator", supporter: true }) should return false.', () => {
        expect(isValidSchema({ username: "jimmy", posts: true, verified: false, role: "creator", supporter: true })).toEqual(false);
    });
    test('8. isValidSchema({ username: true, posts: 30, verified: true, role: "moderator", supporter: false }) should return false.', () => {
        expect(isValidSchema({ username: true, posts: 30, verified: true, role: "moderator", supporter: false })).toEqual(false);
    });
});