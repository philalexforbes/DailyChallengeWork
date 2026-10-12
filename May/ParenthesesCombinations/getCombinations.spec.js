const getCombinations = require('./getCombinations');

describe('Given a number return the number of unique parentheses combinations.', () => {
    test('1. getCombinations(2) should return 2.', () => {
        expect(getCombinations(2)).toEqual(2);
    });
    test('2. getCombinations(3) should return 5.', () => {
        expect(getCombinations(3)).toEqual(5);
    });
    test('3. getCombinations(5) should return 42.', () => {
        expect(getCombinations(5)).toEqual(42);
    });
    test('4. getCombinations(8) should return 1430.', () => {
        expect(getCombinations(8)).toEqual(1430);
    });
    test('5. getCombinations(13) should return 742900.', () => {
        expect(getCombinations(13)).toEqual(742900);
    });
});