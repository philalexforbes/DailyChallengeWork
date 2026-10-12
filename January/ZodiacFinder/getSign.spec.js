const getSign = require('./getSign');

describe('Return the appropriate Zodiac sign given the inputted date string.', () => {
    test('1. getSign("2026-01-31") should return "Aquarius".', () => {
        expect(getSign("2026-01-31")).toEqual('Aquarius');
    });
    test('2. getSign("2001-06-10") should return "Gemini".', () => {
        expect(getSign("2001-06-10")).toEqual('Gemini');
    });
    test('3. getSign("1985-09-07") should return "Virgo".', () => {
        expect(getSign("1985-09-07")).toEqual('Virgo');
    });
    test('4. getSign("2023-03-19") should return "Pisces".', () => {
        expect(getSign("2023-03-19")).toEqual('Pisces');
    });
    test('5. getSign("2045-11-05") should return "Scorpio".', () => {
        expect(getSign("2045-11-05")).toEqual('Scorpio');
    });
    test('6. getSign("1985-12-06") should return "Sagittarius".', () => {
        expect(getSign("1985-12-06")).toEqual('Sagittarius');
    });
    test('7. getSign("2025-12-30") should return "Capricorn".', () => {
        expect(getSign("2025-12-30")).toEqual('Capricorn');
    });
    test('8. getSign("2018-10-08") should return "Libra".', () => {
        expect(getSign("2018-10-08")).toEqual('Libra');
    });
    test('9. getSign("1958-05-04") should return "Taurus".', () => {
        expect(getSign("1958-05-04")).toEqual('Taurus');
    });
});