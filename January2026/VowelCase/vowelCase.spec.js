const vowelCase = require('./vowelCase');

describe('Verify that the returned string only has the vowels capitalized', () => {
    test('1. vowelCase("vowelcase") should return "vOwElcAsE".', () => {
        expect(vowelCase("vowelcase")).toEqual("vOwElcAsE");
    });
    test('2. vowelCase("coding is fun") should return "cOdIng Is fUn".', () => {
        expect(vowelCase("coding is fun")).toEqual("cOdIng Is fUn");
    });
    test('3. vowelCase("HELLO, world!") should return "hEllO, wOrld!".', () => {
        expect(vowelCase("HELLO, world!")).toEqual("hEllO, wOrld!");
    });
    test('4. vowelCase("git cherry-pick") should return "gIt chErry-pIck".', () => {
        expect(vowelCase("git cherry-pick")).toEqual("gIt chErry-pIck");
    });
    test('5. vowelCase("HEAD~1") should return "hEAd~1".', () => {
        expect(vowelCase("HEAD~1")).toEqual("hEAd~1");
    });
});