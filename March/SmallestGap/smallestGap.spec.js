const smallestGap = require('./smallestGap');

describe('Given an input string return the first substring between two identical characters that have the smallest gap.', () => {
    test('1. smallestGap("ABCDAC") should return "DA".', () => {
        expect(smallestGap("ABCDAC")).toEqual("DA");
    });
    test('2. smallestGap("racecar") should return "e".', () => {
        expect(smallestGap("racecar")).toEqual("e");
    });
    test('3. smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4") should return "#q6e&rkf(p".', () => {
        expect(smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4")).toEqual("#q6e&rkf(p");
    });
    test('4. smallestGap("Hello World") should return "".', () => {
        expect(smallestGap("Hello World")).toEqual("");
    });
    test('5. smallestGap("The quick brown fox jumps over the lazy dog.") should return "fox".', () => {
        expect(smallestGap("The quick brown fox jumps over the lazy dog.")).toEqual("fox");
    });
});