const purgeMostFrequent = require('./purgeMostFrequent');

describe('Removal of most frequent element(s) is successful', ()=> {
    test('1. purgeMostFrequent([1, 2, 2, 3]) should return [1, 3].', ()=> {
        expect(purgeMostFrequent([1, 2, 2, 3])).toEqual([1, 3]);
    });
    test('2. purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]) should return ["a", "b", "b", "c", "c", "c"].', ()=> {
        expect(purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"])).toEqual(["a", "b", "b", "c", "c", "c"]);
    });
    test('3. purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]) should return ["red", "green", "red", "green"].', ()=> {
        expect(purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"])).toEqual(["red", "green", "red", "green"]);
    });
    test('4. purgeMostFrequent([5, 5, 5, 5]) should return [].', ()=> {
        expect(purgeMostFrequent([5, 5, 5, 5])).toEqual([]);
    });
})