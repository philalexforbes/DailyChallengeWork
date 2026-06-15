const sortNumbers = require('./sortNumbers');

describe('Given a string of numbers return an array with the numbers sorted and converted to numbers.', () => {
    test('1. sortNumbers("3,1,2") should return [1, 2, 3].', () => {
        expect(sortNumbers("3,1,2")).toEqual([1, 2, 3]);
    });
    test('2. sortNumbers("5,3,8,1,9,2") should return [1, 2, 3, 5, 8, 9].', () => {
        expect(sortNumbers("5,3,8,1,9,2")).toEqual([1, 2, 3, 5, 8, 9]);
    });
    test('3. sortNumbers("12,61,49,80,19,50,77,38") should return [12, 19, 38, 49, 50, 61, 77, 80].', () => {
        expect(sortNumbers("12,61,49,80,19,50,77,38")).toEqual([12, 19, 38, 49, 50, 61, 77, 80]);
    });
    test('4. sortNumbers("0,6,-19,44,-2,7,0") should return [-19, -2, 0, 0, 6, 7, 44].', () => {
        expect(sortNumbers("0,6,-19,44,-2,7,0")).toEqual([-19, -2, 0, 0, 6, 7, 44]);
    });
});