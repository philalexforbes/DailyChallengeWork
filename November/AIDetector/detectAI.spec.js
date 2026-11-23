const detectAI = require('./detectAI');

describe('Given text and rules, return if the text was human written or AI.', () => {
    test('1. detectAI("The quick brown fox jumped over the lazy dog.") should return "Human".', () => {
        expect(detectAI("The quick brown fox jumped over the lazy dog."))
        .toEqual("Human");
    });
    test('2. detectAI("The hypersonic brown fox - jumped (over) the lazy dog.") should return "Human".', () => {
        expect(detectAI("The hypersonic brown fox - jumped (over) the lazy dog."))
        .toEqual("Human");
    });
    test('3. detectAI("Yes - you\'re right! I made a mistake there - let me try again.") should return "AI".', () => {
        expect(detectAI("Yes - you're right! I made a mistake there - let me try again."))
        .toEqual("AI");
    });
    test('4. detectAI("The extraordinary students were studying vivaciously.") should return "AI".', () => {
        expect(detectAI("The extraordinary students were studying vivaciously."))
        .toEqual("AI");
    });
    test('5. detectAI("The (excited) student was (coding) in the library.") should return "AI".', () => {
        expect(detectAI("The (excited) student was (coding) in the library."))
        .toEqual("AI");
    });
});