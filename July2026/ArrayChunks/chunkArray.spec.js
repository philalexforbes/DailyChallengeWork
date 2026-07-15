const chunkArray = require('./chunkArray');

describe('Given an array and a chunk size return the array split into arrays of that chunk size.', () => {
    test('1. chunkArray([1, 2, 3, 4, 5, 6], 3) should return [[1, 2, 3], [4, 5, 6]].', () => {
        expect(chunkArray([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    });
    test('2. chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2) should return [[1, "two"], [3, "four"], [5, "six"], [7, "eight"]].', () => {
        expect(chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2)).toEqual([[1, "two"], [3, "four"], [5, "six"], [7, "eight"]]);
    });
    test('3. chunkArray([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]].', () => {
        expect(chunkArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    });
    test('4. chunkArray(["a", "b", "c", "d", "e"], 1) should return [["a"], ["b"], ["c"], ["d"], ["e"]].', () => {
        expect(chunkArray(["a", "b", "c", "d", "e"], 1)).toEqual([["a"], ["b"], ["c"], ["d"], ["e"]]);
    });
    test('5. chunkArray([1, 2, 3], 5) should return [[1, 2, 3]].', () => {
        expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });
});