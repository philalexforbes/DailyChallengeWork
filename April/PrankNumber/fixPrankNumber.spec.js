const fixPrankNumber = require('./fixPrankNumber');

describe('With an array of numbers fix the number that doesn\'t fit the pattern and return the array.', () => {
    test('1. fixPrankNumber([2, 4, 7, 8, 10]) should return [2, 4, 6, 8, 10].', () => {
        expect(fixPrankNumber([2, 4, 7, 8, 10])).toEqual([2, 4, 6, 8, 10]);
    });
    test('2. fixPrankNumber([10, 10, 8, 7, 6]) should return [10, 9, 8, 7, 6].', () => {
        expect(fixPrankNumber([10, 10, 8, 7, 6])).toEqual([10, 9, 8, 7, 6]);
    });
    test('3. fixPrankNumber([12, 24, 36, 48, 61, 72, 84, 96]) should return [12, 24, 36, 48, 60, 72, 84, 96].', () => {
        expect(fixPrankNumber([12, 24, 36, 48, 61, 72, 84, 96])).toEqual([12, 24, 36, 48, 60, 72, 84, 96]);
    });
    test('4. fixPrankNumber([4, 1, -2, -5, -8, -5]) should return [4, 1, -2, -5, -8, -11].', () => {
        expect(fixPrankNumber([4, 1, -2, -5, -8, -5])).toEqual([4, 1, -2, -5, -8, -11]);
    });
    test('5. fixPrankNumber([0, 100, 200, 300, 150, 500]) should return [0, 100, 200, 300, 400, 500].', () => {
        expect(fixPrankNumber([0, 100, 200, 300, 150, 500])).toEqual([0, 100, 200, 300, 400, 500]);
    });
    test('6. fixPrankNumber([400, 425, 400, 375, 350, 325, 300]) should return [450, 425, 400, 375, 350, 325, 300].', () => {
        expect(fixPrankNumber([400, 425, 400, 375, 350, 325, 300])).toEqual([450, 425, 400, 375, 350, 325, 300]);
    });
    test('7. fixPrankNumber([-5, 5, 10, 15, 20]) should return [0, 5, 10, 15, 20].', () => {
        expect(fixPrankNumber([-5, 5, 10, 15, 20])).toEqual([0, 5, 10, 15, 20]);
    });
});