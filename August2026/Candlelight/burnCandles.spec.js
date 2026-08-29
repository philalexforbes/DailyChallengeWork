const burnCandles = require('./burnCandles');

describe('Return the number of candles burned with the number needed to make a new candle.', () => {
    test('1. burnCandles(7, 2) should return 13', () => {
        expect(burnCandles(7, 2)).toEqual(13);
    });
    test('2. burnCandles(10, 5) should return 12', () => {
        expect(burnCandles(10, 5)).toEqual(12);
    });
    test('3. burnCandles(20, 3) should return 29', () => {
        expect(burnCandles(20, 3)).toEqual(29);
    });
    test('4. burnCandles(17, 4) should return 22', () => {
        expect(burnCandles(17, 4)).toEqual(22);
    });
    test('5. burnCandles(2345, 3) should return 3517', () => {
        expect(burnCandles(2345, 3)).toEqual(3517);
    });
});