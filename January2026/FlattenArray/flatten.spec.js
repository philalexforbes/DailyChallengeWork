const flatten = require('./flatten');

describe('Verify that the input array has been flattened', () => {
    test('1. flatten([1, [2, 3], 4]) should return [1, 2, 3, 4].', () => {
        expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    });
    test('2. flatten([5, [4, [3, 2]], 1]) should return [5, 4, 3, 2, 1].', () => {
        expect(flatten([5, [4, [3, 2]], 1])).toEqual([5, 4, 3, 2, 1]);
    });
    test('3. flatten(["A", [[[["B"]]]], "C"]) should return ["A", "B", "C"].', () => {
        expect(flatten(["A", [[[["B"]]]], "C"])).toEqual(["A", "B", "C"]);
    });
    test('4. flatten([["L", "M", "N"], ["O", ["P", "Q", ["R", ["S", ["T", "U"]]]]], "V", ["W", ["X", ["Y", ["Z"]]]]]) should return ["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].', () => {
        expect(flatten([["L", "M", "N"], ["O", ["P", "Q", ["R", ["S", ["T", "U"]]]]], "V", ["W", ["X", ["Y", ["Z"]]]]]))
        .toEqual(["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
    });
    test('5. flatten([["red", ["blue", ["green", ["yellow", ["purple"]]]]], "orange", ["pink", ["brown"]]]) should return ["red","blue","green","yellow","purple","orange","pink","brown"].', () => {
        expect(flatten([["red", ["blue", ["green", ["yellow", ["purple"]]]]], "orange", ["pink", ["brown"]]]))
        .toEqual(["red","blue","green","yellow","purple","orange","pink","brown"]);
    });
});