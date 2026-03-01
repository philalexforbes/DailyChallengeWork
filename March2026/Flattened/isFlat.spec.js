const isFlat = require('./isFlat');

describe('When given an array return true or false if it is a 2D array.', () => {
    test('1. isFlat([1, 2, 3, 4]) should return true.', () => {
        expect(isFlat([1, 2, 3, 4])).toEqual(true);
    });
    test('2. isFlat([1, [2, 3], 4]) should return false.', () => {
        expect(isFlat([1, [2, 3], 4])).toEqual(false);
    });
    test('3. isFlat([1, 0, false, true, "a", "b"]) should return true.', () => {
        expect(isFlat([1, 0, false, true, "a", "b"])).toEqual(true);
    });
    test('4. isFlat(["a", [0], "b", true]) should return false.', () => {
        expect(isFlat(["a", [0], "b", true])).toEqual(false);
    });
    test('5. isFlat([1, [2, [3, [4, [5]]]], 6]) should return false.', () => {
        expect(isFlat([1, [2, [3, [4, [5]]]], 6])).toEqual(false);
    });
})