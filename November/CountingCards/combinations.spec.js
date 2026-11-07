const combinations = require('./combinations');

describe('Given a number of cards from a deck of 52. Return the number of combinations.', () => {
    test('1. combinations(52) should return 1.', () => {
        expect(combinations(52)).toEqual(1);
    });
    test('2. combinations(1) should return 52.', () => {
        expect(combinations(1)).toEqual(52);
    });
    test('3. combinations(2) should return 1326.', () => {
        expect(combinations(2)).toEqual(1326);
    });
    test('4. combinations(5) should return 2598960.', () => {
        expect(combinations(5)).toEqual(2598960);
    });
    test('5. combinations(10) should return 15820024220.', () => {
        expect(combinations(10)).toEqual(15820024220.);
    });
    test('6. combinations(50) should return 1326.', () => {
        expect(combinations(50)).toEqual(1326);
    });
});