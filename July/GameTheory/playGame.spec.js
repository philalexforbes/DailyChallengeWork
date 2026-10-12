const playGame = require('./playGame');

describe('Given two players moves in a game theory game, return their scores.', () => {
    test('1. playGame("CCCC", "CCCC") should return [12, 12].', () => {
        expect(playGame("CCCC", "CCCC"))
        .toEqual([12, 12]);
    });
    test('2. playGame("DDDD", "DDDD") should return [4, 4].', () => {
        expect(playGame("DDDD", "DDDD"))
        .toEqual([4, 4]);
    });
    test('3. playGame("CCDD", "CDDD") should return [5, 10].', () => {
        expect(playGame("CCDD", "CDDD"))
        .toEqual([5, 10]);
    });
    test('4. playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD") should return [24, 34].', () => {
        expect(playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD"))
        .toEqual([24, 34]);
    });
    test('5. playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC") should return [66, 21].', () => {
        expect(playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC"))
        .toEqual([66, 21]);
    });
});