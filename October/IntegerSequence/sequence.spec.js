const sequence = require('./sequence');

describe('Given a number give the sequence to that number starting at 1.', () => {
    test('1. sequence(5) should return "12345".', () => {
        expect(sequence(5)).toEqual("12345");
    });
    test('2. sequence(10) should return "12345678910".', () => {
        expect(sequence(10)).toEqual("12345678910");
    });
    test('3. sequence(1) should return "1".', () => {
        expect(sequence(1)).toEqual("1");
    });
    test('4. sequence(27) should return "123456789101112131415161718192021222324252627".', () => {
        expect(sequence(27)).toEqual("123456789101112131415161718192021222324252627");
    });
});