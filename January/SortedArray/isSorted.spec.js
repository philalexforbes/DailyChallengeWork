const isSorted = require('./isSorted');

describe('Return if an array is sorted or not and the order it is sorted in', () => {
    test('1. isSorted([1, 2, 3, 4, 5]) should return "Ascending".', ()=> {
        expect(isSorted([1, 2, 3, 4, 5])).toEqual("Ascending");
    });
    test('2. isSorted([10, 8, 6, 4, 2]) should return "Descending".', ()=> {
        expect(isSorted([10, 8, 6, 4, 2])).toEqual("Descending");
    });
    test('3. isSorted([1, 3, 2, 4, 5]) should return "Not sorted".', ()=> {
        expect(isSorted([1, 3, 2, 4, 5])).toEqual("Not sorted");
    });
    test('4. isSorted([3.14, 2.71, 1.61, 0.57]) should return "Descending".', ()=> {
        expect(isSorted([3.14, 2.71, 1.61, 0.57])).toEqual("Descending");
    });
    test('5. isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]) should return "Ascending".', ()=> {
        expect(isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9])).toEqual("Ascending");
    });
    test('6. isSorted([0.4, 0.5, 0.3]) should return "Not sorted".', ()=> {
        expect(isSorted([0.4, 0.5, 0.3])).toEqual("Not sorted");
    });
});