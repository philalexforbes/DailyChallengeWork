const horoscopeMatch = require('./horoscopeMatch');

describe('Given two star signs return the correct compatibility percentage.', () => {
    test('1. horoscopeMatch("Libra", "Sagittarius") should return "80%".', () => {
        expect(horoscopeMatch("Libra", "Sagittarius")).toEqual("80%");
    });
    test('2. horoscopeMatch("Gemini", "Scorpio") should return "20%".', () => {
        expect(horoscopeMatch("Gemini", "Scorpio")).toEqual("20%");
    });
    test('3. horoscopeMatch("Pisces", "Aries") should return "40%".', () => {
        expect(horoscopeMatch("Pisces", "Aries")).toEqual("40%");
    });
    test('4. horoscopeMatch("Capricorn", "Cancer") should return "50%".', () => {
        expect(horoscopeMatch("Capricorn", "Cancer")).toEqual("50%");
    });
    test('5. horoscopeMatch("Aquarius", "Aquarius") should return "100%".', () => {
        expect(horoscopeMatch("Aquarius", "Aquarius")).toEqual("100%");
    });
    test('6. horoscopeMatch("Virgo", "Taurus") should return "90%".', () => {
        expect(horoscopeMatch("Virgo", "Taurus")).toEqual("90%");
    });
    test('7. horoscopeMatch("Leo", "Scorpio") should return "30%".', () => {
        expect(horoscopeMatch("Leo", "Scorpio")).toEqual("30%");
    });
});