const shiftArray = require('./shiftArray');

describe('Given an array and a position shift return the new array.', () => {
    test('1. shiftArray([1, 2, 3], 1) should return [2, 3, 1].', () => {
        expect(shiftArray([1, 2, 3], 1)).toEqual([2, 3, 1]);
    });
    test('2. shiftArray([1, 2, 3], -1) should return [3, 1, 2].', () => {
        expect(shiftArray([1, 2, 3], -1)).toEqual([3, 1, 2]);
    });
    test('3. shiftArray(["alpha", "bravo", "charlie"], 5) should return ["charlie", "alpha", "bravo"].', () => {
        expect(shiftArray(["alpha", "bravo", "charlie"], 5)).toEqual(["charlie", "alpha", "bravo"]);
    });
    test('4. shiftArray(["alpha", "bravo", "charlie"], -11) should return ["bravo", "charlie", "alpha"].', () => {
        expect(shiftArray(["alpha", "bravo", "charlie"], -11)).toEqual(["bravo", "charlie", "alpha"]);
    });
    test('5. shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15) should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].', () => {
        expect(shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15)).toEqual([5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);
    });
});