const sockPairs = require('./sockPairs');

describe('Given the number of pairs of socks and the number of wash cycles return the number of complete pairs of socks.', () => {
    test('1. sockPairs(2, 5) should return 1.', () => {
        expect(sockPairs(2, 5)).toEqual(1);
    });
    test('2. sockPairs(1, 2) should return 0.', () => {
        expect(sockPairs(1, 2)).toEqual(0);
    });
    test('3. sockPairs(5, 11) should return 4.', () => {
        expect(sockPairs(5, 11)).toEqual(4);
    });
    test('4. sockPairs(6, 25) should return 3.', () => {
        expect(sockPairs(6, 25)).toEqual(3);
    });
    test('5. sockPairs(1, 8) should return 0.', () => {
        expect(sockPairs(1, 8)).toEqual(0);
    });
});