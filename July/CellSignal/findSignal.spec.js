const findSignal = require('./findSignal');

describe('Given a grid of cell phone tower readings, return the correct row and column containing the phone.', () => {
    test('1. findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]) should return [1, 2].', () => {
        expect(findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]))
        .toEqual([1, 2]);
    });
    test('2. findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]) should return [2, 1].', () => {
        expect(findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]))
        .toEqual([2, 1]);
    });
    test('3. findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]) should return [2, 2].', () => {
        expect(findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]))
        .toEqual([2, 2]);
    });
    test('4. findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]) should return [3, 4].', () => {
        expect(findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]))
        .toEqual([3, 4]);
    });
    test('5. findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]) should return [3, 3].', () => {
        expect(findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]))
        .toEqual([3, 3]);
    });
});