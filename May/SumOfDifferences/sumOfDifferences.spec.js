const sumOfDifferences = require('./sumOfDifferences');

describe('Given an array of number return the sum of the differences between each number and the one that follows it.', () => {
    test('1. sumOfDifferences([1, 3, 4]) should return 3.', () => {
        expect(sumOfDifferences([1, 3, 4])).toEqual(3);
    });
    test('2. sumOfDifferences([5, -3, 3, 9, 10]) should return 5.', () => {
        expect(sumOfDifferences([5, -3, 3, 9, 10])).toEqual(5);
    });
    test('3. sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7]) should return -16.', () => {
        expect(sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7])).toEqual(-16);
    });
    test('4. sumOfDifferences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]) should return 25.', () => {
        expect(sumOfDifferences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75])).toEqual(25);
    });
});