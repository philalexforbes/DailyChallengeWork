const secondLargest = require('./secondLargest');

describe('Given an array return the second largest distinct number.', () => {
    test('1. secondLargest([1, 2, 3, 4]) should return 3.', () => {
        expect(secondLargest([1, 2, 3, 4])).toEqual(3);
    });
    test('2. secondLargest([20, 139, 94, 67, 31]) should return 94.', () => {
        expect(secondLargest([20, 139, 94, 67, 31])).toEqual(94);
    });
    test('3. secondLargest([2, 3, 4, 6, 6]) should return 4.', () => {
        expect(secondLargest([2, 3, 4, 6, 6])).toEqual(4);
    });
    test('4. secondLargest([10, -17, 55.5, 44, 91, 0]) should return 55.5.', () => {
        expect(secondLargest([10, -17, 55.5, 44, 91, 0])).toEqual(55.5);
    });
    test('5. secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]) should return 0.', () => {
        expect(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0])).toEqual(0);
    });
});