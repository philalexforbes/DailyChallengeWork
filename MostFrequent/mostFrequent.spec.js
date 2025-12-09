const mostFrequent = require('./mostFrequent');

describe('Verify the most frequent item in the array is returned', () => {
    test('mostFrequent(["a", "b", "a", "c"]) should return "a".', ()=> {
        expect(mostFrequent(["a", "b", "a", "c"])).toEqual("a");
    });
    test('mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]) should return 2.', ()=> {
        expect(mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9])).toEqual(2);
    });
    test('mostFrequent([true, false, "false", "true", false]) should return false.', ()=> {
        expect(mostFrequent([true, false, "false", "true", false])).toEqual(false);
    });
    test('mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]) should return 40.', ()=> {
        expect(mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60])).toEqual(40);
    });
})