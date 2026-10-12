const sumArray = require('./sumArray');

describe('Given an array of numbers return the correct sum of those numbers.', () => {
    test('1. sumArray([1, 2, 3, 4, 5]) should return 15.', () => {
        expect(sumArray([1, 2, 3, 4, 5])).toEqual(15);
    });
    test('2. sumArray([42]) should return 42.', () => {
        expect(sumArray([42])).toEqual(42);
    });
    test('3. sumArray([5, -2, 7, -3]) should return 7.', () => {
        expect(sumArray([5, -2, 7, -3])).toEqual(7);
    });
    test('4. sumArray([203, 145, -129, 6293, 523, -919, 845, 2434]) should return 9395.', () => {
        expect(sumArray([203, 145, -129, 6293, 523, -919, 845, 2434])).toEqual(9395);
    });
    test('5. sumArray([0, 0]) should return 0.', () => {
        expect(sumArray([0, 0])).toEqual(0);
    });
})