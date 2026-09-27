const isSpam = require('./isSpam');

describe('Given a string for a phone number determine if it is a spame number or not.', () => {
    test('1. isSpam("+0 (200) 234-0182") should return false.', () => {
        expect(isSpam("+0 (200) 234-0182")).toEqual(false);
    });
    test('2. isSpam("+091 (555) 309-1922") should return true.', () => {
        expect(isSpam("+091 (555) 309-1922")).toEqual(true);
    });
    test('3. isSpam("+1 (555) 435-4792") should return true.', () => {
        expect(isSpam("+1 (555) 435-4792")).toEqual(true);
    });
    test('4. isSpam("+0 (955) 234-4364") should return true.', () => {
        expect(isSpam("+0 (955) 234-4364")).toEqual(true);
    });
    test('5. isSpam("+0 (155) 131-6943") should return true.', () => {
        expect(isSpam("+0 (155) 131-6943")).toEqual(true);
    });
    test('6. isSpam("+0 (555) 135-0192") should return true.', () => {
        expect(isSpam("+0 (555) 135-0192")).toEqual(true);
    });
    test('7. isSpam("+0 (555) 564-1987") should return true.', () => {
        expect(isSpam("+0 (555) 564-1987")).toEqual(true);
    });
    test('8. isSpam("+00 (555) 234-0182") should return false.', () => {
        expect(isSpam("+00 (555) 234-0182")).toEqual(false);
    });
});