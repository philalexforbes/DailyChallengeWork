const isValidSchema = require('./isValidSchema');

describe('Verify if the schema is valid.', () => {
    test('1. isValidSchema({ username: "gill", posts: 12, verified: false, role: "creator", supporter: false, badges: [ "early-adopter", "popular" ] }) should return true.', () => {
        expect(isValidSchema({ username: "gill", posts: 12, verified: false, role: "creator", supporter: false, badges: [ "early-adopter", "popular" ] }))
        .toEqual(true);
    });
    test('2. isValidSchema({ username: "tonya", posts: 299, verified: true, role: "moderator", supporter: true, badges: [ "streak-master", "veteran" ], followers: 1233 }) should return true.', () => {
        expect(isValidSchema({ username: "tonya", posts: 299, verified: true, role: "moderator", supporter: true, badges: [ "streak-master", "veteran" ], followers: 1233 }))
        .toEqual(true);
    });
    test('3. isValidSchema({ username: "zara", posts: 0, verified: false, role: "user", supporter: false, badges: [] }) should return true.', () => {
        expect(isValidSchema({ username: "zara", posts: 0, verified: false, role: "user", supporter: false, badges: [] }))
        .toEqual(true);
    });
    test('4. isValidSchema({ username: "nicole", posts: 65, verified: true, role: "admin", supporter: false, badges: [ "first-post", 18 ] }) should return false.', () => {
        expect(isValidSchema({ username: "nicole", posts: 65, verified: true, role: "admin", supporter: false, badges: [ "first-post", 18 ] }))
        .toEqual(false);
    });
    test('5. isValidSchema({ username: "tim", posts: 25, verified: true, role: "staff", supporter: false }) should return false.', () => {
        expect(isValidSchema({ username: "tim", posts: 25, verified: true, role: "staff", supporter: false }))
        .toEqual(false);
    });
    test('6. isValidSchema({ username: "charlie", posts: 0, verified: false, role: "user", supporter: "no", badges: [ "first-post", "anniversary" ] }) should return false.', () => {
        expect(isValidSchema({ username: "charlie", posts: 0, verified: false, role: "user", supporter: "no", badges: [ "first-post", "anniversary" ] }))
        .toEqual(false);
    });
    test('7. isValidSchema({ username: "wanda", posts: 15, verified: true, role: "friend", supporter: true, badges: [ "popular" ] }) should return false.', () => {
        expect(isValidSchema({ username: "wanda", posts: 15, verified: true, role: "friend", supporter: true, badges: [ "popular" ] }))
        .toEqual(false);
    });
    test('8. isValidSchema({ username: "guy", posts: 5, verified: "false", role: "staff", supporter: true, badges: [ "helper" ] }) should return false.', () => {
        expect(isValidSchema({ username: "guy", posts: 5, verified: "false", role: "staff", supporter: true, badges: [ "helper" ] }))
        .toEqual(false);
    });
    test('9. isValidSchema({ username: "carrie", verified: true, role: "moderator", supporter: true, badges: [ "helper", "sharer" ] }) should return false.', () => {
        expect(isValidSchema({ username: "carrie", verified: true, role: "moderator", supporter: true, badges: [ "helper", "sharer" ] }))
        .toEqual(false);
    });
    test('10. isValidSchema({ username: true, posts: 75, verified: true, role: "creator", supporter: true, badges: [ "veteran" ] }) should return false.', () => {
        expect(isValidSchema({ username: true, posts: 75, verified: true, role: "creator", supporter: true, badges: [ "veteran" ] }))
        .toEqual(false);
    });
});