const findTarget = require('./findTarget');

describe('Given an array of numbers and a target find the two unique numbers in teh array that add up to the target.', () => {
    test('1. findTarget([2, 7, 11, 15], 9) should return [0, 1].', () => {
        expect(findTarget([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });
    test('2. findTarget([3, 2, 4, 5], 6) should return [1, 2].', () => {
        expect(findTarget([3, 2, 4, 5], 6)).toEqual([1, 2]);
    });
    test('3. findTarget([1, 3, 5, 6, 7, 8], 15) should return [4, 5].', () => {
        expect(findTarget([1, 3, 5, 6, 7, 8], 15)).toEqual([4, 5]);
    });
    test('4. findTarget([1, 3, 5, 7], 14) should return "Target not found".', () => {
        expect(findTarget([1, 3, 5, 7], 14)).toEqual("Target not found");
    });
});