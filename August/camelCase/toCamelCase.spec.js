const toCamelCase = require('./toCamelCase');

describe('Given a string return the string in camel case.', () => {
    test('1. toCamelCase("hello world") should return "helloWorld".', () => {
        expect(toCamelCase("hello world"))
        .toEqual("helloWorld");
    });
    test('2. toCamelCase("HELLO WORLD") should return "helloWorld".', () => {
        expect(toCamelCase("HELLO WORLD"))
        .toEqual("helloWorld");
    });
    test('3. toCamelCase("secret agent-X") should return "secretAgentX".', () => {
        expect(toCamelCase("secret agent-X"))
        .toEqual("secretAgentX");
    });
    test('4. toCamelCase("FREE cODE cAMP") should return "freeCodeCamp".', () => {
        expect(toCamelCase("FREE cODE cAMP"))
        .toEqual("freeCodeCamp");
    });
    test('5. toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".', () => {
        expect(toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"))
        .toEqual("yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk");
    });
});