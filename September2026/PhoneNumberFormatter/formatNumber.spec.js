const formatNumber = require('./formatNumber');

describe('Given a phone number string return the correct format.', () => {
    test('1. formatNumber("05552340182") should return "+0 (555) 234-0182".', () => {
        expect(formatNumber("05552340182")).toEqual("+0 (555) 234-0182");
    });
    test('2. formatNumber("15554354792") should return "+1 (555) 435-4792".', () => {
        expect(formatNumber("15554354792")).toEqual("+1 (555) 435-4792");
    });
});