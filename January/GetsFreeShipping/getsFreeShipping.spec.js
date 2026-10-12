const getsFreeShipping = require('./getsFreeShipping');

describe('Verify if the correct outcome is returned if the user meets the free shipping threshold' , () => {
    test('1. getsFreeShipping(["shoes"], 50) should return true.', () => {
        expect(getsFreeShipping(["shoes"], 50)).toEqual(true);
    });
    test('2. getsFreeShipping(["hat", "socks"], 50) should return false.', () => {
        expect(getsFreeShipping(["hat", "socks"], 50)).toEqual(false);
    });
    test('3. getsFreeShipping(["jeans", "shirt", "jacket"], 75) should return true.', () => {
        expect(getsFreeShipping(["jeans", "shirt", "jacket"], 75)).toEqual(true);
    });
    test('4. getsFreeShipping(["socks", "socks", "hat"], 75) should return false.', () => {
        expect(getsFreeShipping(["socks", "socks", "hat"], 75)).toEqual(false);
    });
    test('5. getsFreeShipping(["shirt", "shirt", "jeans", "socks"], 100) should return true.', () => {
        expect(getsFreeShipping(["shirt", "shirt", "jeans", "socks"], 100)).toEqual(true);
    });
    test('6. getsFreeShipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200) should return false.', () => {
        expect(getsFreeShipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200)).toEqual(false);
    });
});