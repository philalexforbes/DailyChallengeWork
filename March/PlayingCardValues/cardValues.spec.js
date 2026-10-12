const cardValues = require('./cardValues');

describe('Given an array of cards return an array containing the value for each card.', () => {
    test('1. cardValues(["3H", "4D", "5S"]) should return [3, 4, 5].', () => {
        expect(cardValues(["3H", "4D", "5S"])).toEqual([3, 4, 5]);
    });
    test('2. cardValues(["AS", "10S", "10H", "6D", "7D"]) should return [1, 10, 10, 6, 7].', () => {
        expect(cardValues(["AS", "10S", "10H", "6D", "7D"])).toEqual([1, 10, 10, 6, 7]);
    });
    test('3. cardValues(["8D", "QS", "2H", "JC", "9C"]) should return [8, 10, 2, 10, 9].', () => {
        expect(cardValues(["8D", "QS", "2H", "JC", "9C"])).toEqual([8, 10, 2, 10, 9]);
    });
    test('4. cardValues(["AS", "KS"]) should return [1, 10].', () => {
        expect(cardValues(["AS", "KS"])).toEqual([1, 10]);
    });
    test('5. cardValues(["10H", "JH", "QH", "KH", "AH"]) should return [10, 10, 10, 10, 1].', () => {
        expect(cardValues(["10H", "JH", "QH", "KH", "AH"])).toEqual([10, 10, 10, 10, 1]);
    });
})