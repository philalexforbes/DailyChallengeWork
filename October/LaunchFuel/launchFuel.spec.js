const launchFuel = require('./launchFuel');

describe('Given the payload return the amount of fuel needed to launch.', () => {
    test('1. launchFuel(50) should return 12.4.', () => {
        expect(launchFuel(50)).toEqual(12.4);
    });
    test('2. launchFuel(500) should return 124.8.', () => {
        expect(launchFuel(500)).toEqual(124.8);
    });
    test('3. launchFuel(243) should return 60.7.', () => {
        expect(launchFuel(243)).toEqual(60.7);
    });
    test('4. launchFuel(11000) should return 2749.8.', () => {
        expect(launchFuel(11000)).toEqual(2749.8);
    });
    test('5. launchFuel(6214) should return 1553.4.', () => {
        expect(launchFuel(6214)).toEqual(1553.4);
    });
});