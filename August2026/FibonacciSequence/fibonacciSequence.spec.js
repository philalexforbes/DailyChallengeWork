const fibonacciSequence = require('./fibonacciSequence');

describe('Given the first and second number of a fibonacci sequence with a length return the sequence as an array.', () => {
    test('1. fibonacciSequence([0, 1], 20) should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181].', () => {
        expect(fibonacciSequence([0, 1], 20))
        .toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]);
    });
    test('2. fibonacciSequence([21, 32], 1) should return [21].', () => {
        expect(fibonacciSequence([21, 32], 1))
        .toEqual([21]);
    });
    test('3. fibonacciSequence([0, 1], 0) should return [].', () => {
        expect(fibonacciSequence([0, 1], 0))
        .toEqual([]);
    });
    test('4. fibonacciSequence([10, 20], 2) should return [10, 20].', () => {
        expect(fibonacciSequence([10, 20], 2))
        .toEqual([10, 20]);
    });
    test('5. fibonacciSequence([123456789, 987654321], 5) should return [123456789, 987654321, 1111111110, 2098765431, 3209876541].', () => {
        expect(fibonacciSequence([123456789, 987654321], 5))
        .toEqual([123456789, 987654321, 1111111110, 2098765431, 3209876541]);
    });
});