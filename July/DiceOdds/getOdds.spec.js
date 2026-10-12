const getOdds = require('./getOdds');

describe('Given a number of dice and the target return the correct odds.', () => {
    test('1. getOdds(1, 5) should return "1 in 6".', () => {
        expect(getOdds(1, 5)).toEqual("1 in 6");
    });
    test('2. getOdds(2, 4) should return "1 in 12".', () => {
        expect(getOdds(2, 4)).toEqual("1 in 12");
    });
    test('3. getOdds(3, 10) should return "1 in 8".', () => {
        expect(getOdds(3, 10)).toEqual("1 in 8");
    });
    test('4. getOdds(4, 7) should return "1 in 65".', () => {
        expect(getOdds(4, 7)).toEqual("1 in 65");
    });
    test('5. getOdds(5, 26) should return "1 in 111".', () => {
        expect(getOdds(5, 26)).toEqual("1 in 111");
    });
    test('6. getOdds(6, 35) should return "1 in 7776".', () => {
        expect(getOdds(6, 35)).toEqual("1 in 7776");
    });
});