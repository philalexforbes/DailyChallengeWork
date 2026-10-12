const arraySwap = require('./arraySwap');

describe('Verify that the two value array values are swapped', () => {
    test('1. arraySwap(["A", "B"]) should return ["B", "A"].', () => {
        expect(arraySwap(["A", "B"])).toEqual(["B", "A"]);
    });
    test('2. arraySwap([25, 20]) should return [20, 25].', () => {
        expect(arraySwap([25, 20])).toEqual([20, 25]);
    });
    test('3. arraySwap([true, false]) should return [false, true].', () => {
        expect(arraySwap([true, false])).toEqual([false, true]);
    });
    test('4. arraySwap(["1", 1]) should return [1, "1"].', () => {
        expect(arraySwap(["1", 1])).toEqual([1, "1"]);
    });
});