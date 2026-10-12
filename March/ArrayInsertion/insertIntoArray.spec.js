const insertIntoArray = require('./insertIntoArray');

describe('Given an array, a value, and index verify that the value has been inserted into the array at the position.', () => {
    test('1. insertIntoArray([2, 4, 8, 10], 6, 2) should return [2, 4, 6, 8, 10].', () => {
        expect(insertIntoArray([2, 4, 8, 10], 6, 2)).toEqual([2, 4, 6, 8, 10]);
    });
    test('2. insertIntoArray(["the", "quick", "fox"], "brown", 2) should return ["the", "quick", "brown", "fox"].', () => {
        expect(insertIntoArray(["the", "quick", "fox"], "brown", 2)).toEqual(["the", "quick", "brown", "fox"]);
    });
    test('3. insertIntoArray([], 0, 0) should return [0].', () => {
        expect(insertIntoArray([], 0, 0)).toEqual([0]);
    });
    test('4. insertIntoArray([0, 1, 1, 2, 3, 8, 13], 5, 5) should return [0, 1, 1, 2, 3, 5, 8, 13].', () => {
        expect(insertIntoArray([0, 1, 1, 2, 3, 8, 13], 5, 5)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
});