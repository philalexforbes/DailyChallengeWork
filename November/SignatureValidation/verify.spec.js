const verify = require('./verify');

describe('Given a message, key, and signature verify if they match.', () => {
    test('1. verify("foo", "bar", 57) should return true.', () => {
        expect(verify("foo", "bar", 57))
        .toEqual(true);
    });
    test('2. verify("foo", "bar", 54) should return false.', () => {
        expect(verify("foo", "bar", 54))
        .toEqual(false);
    });
    test('3. verify("freeCodeCamp", "Rocks", 238) should return true.', () => {
        expect(verify("freeCodeCamp", "Rocks", 238))
        .toEqual(true);
    });
    test('4. verify("Is this valid?", "No", 210) should return false.', () => {
        expect(verify("Is this valid?", "No", 210))
        .toEqual(false);
    });
    test('5. verify("Is this valid?", "Yes", 233) should return true.', () => {
        expect(verify("Is this valid?", "Yes", 233))
        .toEqual(true);
    });
    test('6. verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) should return true.', () => {
        expect(verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514))
        .toEqual(true);
    });
});