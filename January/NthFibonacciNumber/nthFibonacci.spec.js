const nthFibonacci = require('./nthFibonacci');

describe('Return the number in the Fibonacci sequence as specified', () => {
    test('1. nthFibonacci(4) should return 2.', () => {
        expect(nthFibonacci(4)).toEqual(2);
    });
    test('2. nthFibonacci(10) should return 34.', () => {
        expect(nthFibonacci(10)).toEqual(34);
    });
    test('3. nthFibonacci(15) should return 377.', () => {
        expect(nthFibonacci(15)).toEqual(377);
    });
    test('4. nthFibonacci(40) should return 63245986.', () => {
        expect(nthFibonacci(40)).toEqual(63245986);
    });
    test('5. nthFibonacci(75) should return 1304969544928657.', () => {
        expect(nthFibonacci(75)).toEqual(1304969544928657);
    });
})