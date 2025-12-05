const difference = require('./difference');

describe('Array returned contains the difference between two arrays', () => {
    test('difference([1, 2, 3], [3, 4, 5]) should return [1, 2, 4, 5].', ()=>{
        expect(difference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
    });
    test('difference(["a", "b"], ["c", "b"]) should return ["a", "c"].', ()=>{
        expect(difference(["a", "b"], ["c", "b"])).toEqual(["a", "c"]);
    });
    test('difference([1, "a", 2], [2, "b", "a"]) should return [1, "b"].', ()=>{
        expect(difference([1, "a", 2], [2, "b", "a"])).toEqual([1, "b"]);
    });
    test('difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [2, 4, 6, 8].', ()=>{
        expect(difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([2, 4, 6, 8]);
    });
});