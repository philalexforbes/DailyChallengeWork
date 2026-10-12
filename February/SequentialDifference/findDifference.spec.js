const findDifference = require('./findDifference');

describe('Return an array of numbers needed to reach the next number in the array.', () => {
    test('1. findDifferences([1, 2, 4, 7]) should return [1, 2, 3, 0].', () => {
        expect(findDifferences([1, 2, 4, 7])).toEqual([1, 2, 3, 0]);
    });
    test('2. findDifferences([10, 15, 19, 22, 24, 25]) should return [5, 4, 3, 2, 1, 0].', () => {
        expect(findDifferences([10, 15, 19, 22, 24, 25])).toEqual([5, 4, 3, 2, 1, 0]);
    });
    test('3. findDifferences([25, 20, 16, 13, 11, 10]) should return [-5, -4, -3, -2, -1, 0].', () => {
        expect(findDifferences([25, 20, 16, 13, 11, 10])).toEqual([-5, -4, -3, -2, -1, 0]);
    });
    test('4. findDifferences([0, 1, 2, 2, 3, 3, 4, 5]) should return [ 1, 1, 0, 1, 0, 1, 1, 0 ].', () => {
        expect(findDifferences([0, 1, 2, 2, 3, 3, 4, 5])).toEqual([ 1, 1, 0, 1, 0, 1, 1, 0 ]);
    });
    test('5. findDifferences([1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1]) should return [1, 3, 7, 22, -49, 14, 42, 72, -335, 123, 59, 50, -28, 12, 4, 1, 0].', () => {
        expect(findDifferences([1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1])).toEqual([1, 3, 7, 22, -49, 14, 42, 72, -335, 123, 59, 50, -28, 12, 4, 1, 0]);
    });
})