const isValidTrick = require('./isValidTrick');

describe('Given a two word trick return if the trick is valid or not.', () => {
    test('1. isValidTrick("Polar Vortex") should return true.', () => {
        expect(isValidTrick("Polar Vortex")).toEqual(true);
    });
    test('2. isValidTrick("Solar Icequake") should return true.', () => {
        expect(isValidTrick("Solar Icequake")).toEqual(true);
    });
    test('3. isValidTrick("Thunder Blizzard") should return true.', () => {
        expect(isValidTrick("Thunder Blizzard")).toEqual(true);
    });
    test('4. isValidTrick("Phantom Frostbite") should return true.', () => {
        expect(isValidTrick("Phantom Frostbite")).toEqual(true);
    });
    test('5. isValidTrick("Ghost Avalanche") should return true.', () => {
        expect(isValidTrick("Ghost Avalanche")).toEqual(true);
    });
    test('6. isValidTrick("Snowstorm Shadow") should return false.', () => {
        expect(isValidTrick("Snowstorm Shadow")).toEqual(false);
    });
    test('7. isValidTrick("Solar Sky") should return false.', () => {
        expect(isValidTrick("Solar Sky")).toEqual(false);
    });
})