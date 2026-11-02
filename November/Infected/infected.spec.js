const infected = require('./infected');

describe('Given a number of days return the number of infected computers.', () => {
    test('1. infected(1) should return 2.', () => {
        expect(infected(1)).toEqual(2);
    });
    test('2. infected(3) should return 6.', () => {
        expect(infected(3)).toEqual(6);
    });
    test('3. infected(8) should return 152.', () => {
        expect(infected(8)).toEqual(152);
    });
    test('4. infected(17) should return 39808.', () => {
        expect(infected(17)).toEqual(39808);
    });
    test('5. infected(25) should return 5217638.', () => {
        expect(infected(25)).toEqual(5217638);
    });
});