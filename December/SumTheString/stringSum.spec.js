const stringSum = require('./stringSum');

describe('Pull the numbers from the string and verify the sum of those numbers is correct', () => {
    test('1. stringSum("3apples2bananas") should return 5.', () => {
        expect(stringSum("3apples2bananas")).toEqual(5);
    });
    test('2. stringSum("10cats5dogs2birds") should return 17.', () => {
        expect(stringSum("10cats5dogs2birds")).toEqual(17);
    });
    test('3. stringSum("125344") should return 125344.', () => {
        expect(stringSum("125344")).toEqual(125344);
    });
    test('4. stringSum("a1b20c300") should return 321.', () => {
        expect(stringSum("a1b20c300")).toEqual(321);
    });
    test('5. stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5") should return 1653.', () => {
        expect(stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5")).toEqual(1653);
    });
});