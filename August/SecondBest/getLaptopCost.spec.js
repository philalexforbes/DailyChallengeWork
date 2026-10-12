const getLaptopCost = require('./getLaptopCost');

describe('Given an array of laptop prices return the second most expensive laptop within the budget.', () => {
    test('1. getLaptopCost([1500, 2000, 1800, 1400], 1900) should return 1800', () => {
        expect(getLaptopCost([1500, 2000, 1800, 1400], 1900)).toEqual(1800);
    });
    test('2. getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900) should return 1800', () => {
        expect(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900)).toEqual(1800);
    });
    test('3. getLaptopCost([2099, 1599, 1899, 1499], 2200) should return 1899', () => {
        expect(getLaptopCost([2099, 1599, 1899, 1499], 2200)).toEqual(1899);
    });
    test('4. getLaptopCost([2099, 1599, 1899, 1499], 1000) should return 0', () => {
        expect(getLaptopCost([2099, 1599, 1899, 1499], 1000)).toEqual(0);
    });
    test('5. getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450) should return 1400', () => {
        expect(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450)).toEqual(1400);
    });
});