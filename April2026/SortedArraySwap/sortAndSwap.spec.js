const sortAndSwap = require('./sortAndSwap');

describe('Given an array sort it in ascending order and all multiples of three are swapped with the item before it.', () => {
    test('1. sortAndSwap([3, 1, 2, 4, 6, 5]) should return [1, 2, 4, 3, 5, 6].', () => {
        expect(sortAndSwap([3, 1, 2, 4, 6, 5])).toEqual([1, 2, 4, 3, 5, 6]);
    });
    test('2. sortAndSwap([9, 7, 5, 3, 1, 2, 4, 6, 8]) should return [1, 2, 4, 3, 5, 7, 6, 8, 9].', () => {
        expect(sortAndSwap([9, 7, 5, 3, 1, 2, 4, 6, 8])).toEqual([1, 2, 4, 3, 5, 7, 6, 8, 9]);
    });
    test('3. sortAndSwap([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [1, 2, 4, 3, 5, 7, 6, 8, 9].', () => {
        expect(sortAndSwap([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 4, 3, 5, 7, 6, 8, 9]);
    });
    test('4. sortAndSwap([12, 5, 8, 1, 3, 10, 2, 7, 6, 4, 9, 11]) should return [1, 2, 4, 3, 5, 7, 6, 8, 10, 9, 11, 12].', () => {
        expect(sortAndSwap([12, 5, 8, 1, 3, 10, 2, 7, 6, 4, 9, 11])).toEqual([1, 2, 4, 3, 5, 7, 6, 8, 10, 9, 11, 12]);
    });
    test('5. sortAndSwap([100, -50, 0, 75, -25, 50, -75, 25]) should return [-75, -50, 0, -25, 25, 75, 50, 100].', () => {
        expect(sortAndSwap([100, -50, 0, 75, -25, 50, -75, 25])).toEqual([-75, -50, 0, -25, 25, 75, 50, 100]);
    });
    test('6. sortAndSwap([5, 9, 13, 77, 88, 313, -10, -65, 0, 8, 99, 101, -4, 2]) should return [-65, -10, 0, -4, 2, 8, 5, 9, 77, 13, 88, 101, 99, 313].', () => {
        expect(sortAndSwap([5, 9, 13, 77, 88, 313, -10, -65, 0, 8, 99, 101, -4, 2])).toEqual([-65, -10, 0, -4, 2, 8, 5, 9, 77, 13, 88, 101, 99, 313]);
    });
});