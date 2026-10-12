const migrateRecord = require('./migrateRecord');

describe('Given a database schema and the missing records return the correct record with the missing data.', () => {
    test('1. migrateRecord({ username: "", posts: 0 }, { verified: true }) should return { username: "", posts: 0, verified: true }.', () => {
        expect(migrateRecord({ username: "", posts: 0 }, { verified: true }))
        .toEqual({ username: "", posts: 0, verified: true });
    });
    test('2. migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }) should return { username: "camper", posts: 5 }.', () => {
        expect(migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }))
        .toEqual({ username: "camper", posts: 5 });
    });
    test('3. migrateRecord({ username: "", posts: 0, verified: false }, { username: "camper" }) should return { username: "camper", posts: 0, verified: false }.', () => {
        expect(migrateRecord({ username: "", posts: 0, verified: false }, { username: "camper" }))
        .toEqual({ username: "camper", posts: 0, verified: false });
    });
    test('4. migrateRecord({ username: "", posts: 0 }, { username: "camper", role: "admin" }) should return { username: "camper", role: "admin", posts: 0 }.', () => {
        expect(migrateRecord({ username: "", posts: 0 }, { username: "camper", role: "admin" }))
        .toEqual({ username: "camper", role: "admin", posts: 0 });
    });
    test('5. migrateRecord({ username: "", email: "", posts: 0, verified: false, role: "user", banned: false }, { username: "camper", email: "camper@freecodecamp.org", role: "admin" }) should return { username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false }.', () => {
        expect(migrateRecord({ username: "", email: "", posts: 0, verified: false, role: "user", banned: false }, { username: "camper", email: "camper@freecodecamp.org", role: "admin" }))
        .toEqual({ username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false });
    });
});