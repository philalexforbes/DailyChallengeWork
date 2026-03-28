const pascalRow = require('./pascalRow');

describe('Return the nth row of Pascal\'s triangle as an array.', () => {
    test('1. pascalRow(5) should return [1, 4, 6, 4, 1].', () => {
        expect(pascalRow(5)).toEqual([1, 4, 6, 4, 1]);
    });
    test('2. pascalRow(3) should return [1, 2, 1].', () => {
        expect(pascalRow(3)).toEqual([1, 2, 1]);
    });
    test('3. pascalRow(1) should return [1].', () => {
        expect(pascalRow(1)).toEqual([1]);
    });
    test('4. pascalRow(10) should return [1, 9, 36, 84, 126, 126, 84, 36, 9, 1].', () => {
        expect(pascalRow(10)).toEqual([1, 9, 36, 84, 126, 126, 84, 36, 9, 1]);
    });
    test('5. pascalRow(15) should return [1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1].', () => {
        expect(pascalRow(15)).toEqual([1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1]);
    });
});