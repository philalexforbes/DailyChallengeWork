const gcd = require('./gcd');

describe('Given two numbers return the single greatest common denominator for both numbers.', () => {
    test('1. gcd(4, 6) should return 2.', () => {
        expect(gcd(4, 6)).toEqual(2);
    });
    test('2. gcd(20, 15) should return 5.', () => {
        expect(gcd(20, 15)).toEqual(5);
    });
    test('3. gcd(13, 17) should return 1.', () => {
        expect(gcd(13, 17)).toEqual(1);
    });
    test('4. gcd(654, 456) should return 6.', () => {
        expect(gcd(654, 456)).toEqual(6);
    });
    test('5. gcd(3456, 4320) should return 864.', () => {
        expect(gcd(3456, 4320)).toEqual(864);
    });
});