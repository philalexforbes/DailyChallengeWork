const blendWords = require('./blendWords');

describe('Given two words return the blended version of those words.', () => {
    test('1. blendWords("turtle", "toucan") should return "turcan".', () => {
        expect(blendWords("turtle", "toucan")).toEqual("turcan");
    });
    test('2. blendWords("chipmunk", "flamingo") should return "chipingo".', () => {
        expect(blendWords("chipmunk", "flamingo")).toEqual("chipingo");
    });
    test('3. blendWords("falcon", "pelican") should return "falican".', () => {
        expect(blendWords("falcon", "pelican")).toEqual("falican");
    });
    test('4. blendWords("hyena", "iguana") should return "hyana".', () => {
        expect(blendWords("hyena", "iguana")).toEqual("hyana");
    });
    test('5. blendWords("scorpion", "gorilla") should return "scorilla".', () => {
        expect(blendWords("scorpion", "gorilla")).toEqual("scorilla");
    });
    test('6. blendWords("platypus", "wolverine") should return "platerine".', () => {
        expect(blendWords("platypus", "wolverine")).toEqual("platerine");
    });
});