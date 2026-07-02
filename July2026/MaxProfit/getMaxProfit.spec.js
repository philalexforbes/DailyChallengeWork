const getMaxProfit = require('./getMaxProfit');

describe('Given an array of stock prices and a budget calculate the correct max profit from buying and selling stocks.', () => {
    test('1. getMaxProfit([5, 6], 50) should return "10.00".', () => {
        expect(getMaxProfit([5, 6], 50))
        .toEqual("10.00");
    });
    test('2. getMaxProfit([8, 2, 5, 10], 20) should return "80.00".', () => {
        expect(getMaxProfit([8, 2, 5, 10], 20))
        .toEqual("80.00");
    });
    test('3. getMaxProfit([4, 5, 3, 6], 20) should return "18.00".', () => {
        expect(getMaxProfit([4, 5, 3, 6], 20))
        .toEqual("18.00");
    });
    test('4. getMaxProfit([54.40, 51.22, 53.99, 50.28, 53.01, 52.84], 200) should return "8.31".', () => {
        expect(getMaxProfit([54.40, 51.22, 53.99, 50.28, 53.01, 52.84], 200))
        .toEqual("8.31");
    });
    test('5. getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80) should return "0.00".', () => {
        expect(getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80))
        .toEqual("0.00");
    });
    test('6. getMaxProfit([121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33], 1230.25) should return "73.80".', () => {
        expect(getMaxProfit([121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33], 1230.25))
        .toEqual("73.80");
    });
});