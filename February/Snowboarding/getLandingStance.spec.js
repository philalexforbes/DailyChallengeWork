const getLandingStance = require('./getLandingStance');

describe('Return the correct landing stance given the starting stance and the rotation', () => {
    test('1. getLandingStance("Regular", 90) should return "Regular".', () => {
        expect(getLandingStance("Regular", 90)).toEqual('Regular');
    });
    test('2. getLandingStance("Regular", 180) should return "Goofy".', () => {
        expect(getLandingStance("Regular", 180)).toEqual('Goofy');
    });
    test('3. getLandingStance("Goofy", -270) should return "Regular".', () => {
        expect(getLandingStance("Goofy", -270)).toEqual('Regular');
    });
    test('4. getLandingStance("Regular", 2340) should return "Goofy".', () => {
        expect(getLandingStance("Regular", 2340)).toEqual('Goofy');
    });
    test('5. getLandingStance("Goofy", 2160) should return "Goofy".', () => {
        expect(getLandingStance("Goofy", 2160)).toEqual('Goofy');
    });
    test('6. getLandingStance("Goofy", -540) should return "Regular".', () => {
        expect(getLandingStance("Goofy", -540)).toEqual('Regular');
    });
})