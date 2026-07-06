const getLowercaseWords = require('./getLowercaseWords');

describe('Given a string return the lowercase words only.', () => {
    test('1. getLowercaseWords("hello GOOD world") should return "hello world".', () => {
        expect(getLowercaseWords("hello GOOD world"))
        .toEqual("hello world");
    });
    test('2. getLowercaseWords("these are all lowercase") should return "these are all lowercase".', () => {
        expect(getLowercaseWords("these are all lowercase"))
        .toEqual("these are all lowercase");
    });
    test('3. getLowercaseWords("less is NoT more") should return "less is more".', () => {
        expect(getLowercaseWords("less is NoT more"))
        .toEqual("less is more");
    });
    test('4. getLowercaseWords("DonT eat pizza every OTHER day") should return "eat pizza every day".', () => {
        expect(getLowercaseWords("DonT eat pizza every OTHER day"))
        .toEqual("eat pizza every day");
    });
    test('5. getLowercaseWords("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog") should return "the quick brown fox jumped over the lazy dog".', () => {
        expect(getLowercaseWords("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog"))
        .toEqual("the quick brown fox jumped over the lazy dog");
    });
});