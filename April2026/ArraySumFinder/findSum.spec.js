const findSum = require('./findSum');

describe('Given an array of numbers and a target sum determine what numbers may equal the target sum.', () => {
    test('1. findSum([1, 3, 5, 7], 6) should return [1, 5].', () => {
        expect(findSum([1, 3, 5, 7], 6)).toEqual([1, 5]);
    });
    test('2. findSum([1, 2, 3, 4, 5], 5) should return [1, 4].', () => {
        expect(findSum([1, 2, 3, 4, 5], 5)).toEqual([1, 4]);
    });
    test('3. findSum([1, 2, 3, 4, 5], 6) should return [1, 2, 3].', () => {
        expect(findSum([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3]);
    });
    test('4. findSum([-1, -2, 3, 4], 1) should return [-1, -2, 4].', () => {
        expect(findSum([-1, -2, 3, 4], 1)).toEqual([-1, -2, 4]);
    });
    test('5. findSum([3, 1, 4, 1, 5, 9, 2, 6], 10) should return [3, 1, 4, 2].', () => {
        expect(findSum([3, 1, 4, 1, 5, 9, 2, 6], 10)).toEqual([3, 1, 4, 2]);
    });
    test('6. findSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 20) should return [1, 2, 3, 5, 9].', () => {
        expect(findSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 20)).toEqual([1, 2, 3, 5, 9]);
    });
    test('7. findSum([7, 9, 4, 2, 5], 10) should return "Sum not found".', () => {
        expect(findSum([7, 9, 4, 2, 5], 10)).toEqual("Sum not found");
    });
});