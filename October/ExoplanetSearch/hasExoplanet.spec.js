const hasExoplanet = require('./hasExoplanet');

describe('Given the readings determine if the readings denote an exoplanet.', () => {
    test('1. hasExoplanet("665544554") should return false.', () => {
        expect(hasExoplanet("665544554")).toEqual(false);
    });
    test('2. hasExoplanet("FGFFCFFGG") should return true.', () => {
        expect(hasExoplanet("FGFFCFFGG")).toEqual(true);
    });
    test('3. hasExoplanet("MONOPLONOMONPLNOMPNOMP") should return false.', () => {
        expect(hasExoplanet("MONOPLONOMONPLNOMPNOMP")).toEqual(false);
    });
    test('4. hasExoplanet("FREECODECAMP") should return true.', () => {
        expect(hasExoplanet("FREECODECAMP")).toEqual(true);
    });
    test('5. hasExoplanet("9AB98AB9BC98A") should return false.', () => {
        expect(hasExoplanet("9AB98AB9BC98A")).toEqual(false);
    });
    test('6. hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return true.', () => {
        expect(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE")).toEqual(true);
    });
});
