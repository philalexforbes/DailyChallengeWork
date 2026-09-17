const capitalize = require('./capitalize');

describe('Given a sentence capitalize all letters after punctuation.', () => {
    test('1. capitalize("this is a simple sentence.") should return "This is a simple sentence.".', () => {
        expect(capitalize("this is a simple sentence."))
        .toEqual("This is a simple sentence.");
    });
    test('2. capitalize("hello world. how are you?") should return "Hello world. How are you?".', () => {
        expect(capitalize("hello world. how are you?"))
        .toEqual("Hello world. How are you?");
    });
    test('3. capitalize("i did today\'s coding challenge... it was fun!!") should return "I did today\'s coding challenge... It was fun!!".', () => {
        expect(capitalize("i did today's coding challenge... it was fun!!"))
        .toEqual("I did today's coding challenge... It was fun!!");
    });
    test('4. capitalize("crazy!!!strange???unconventional...sentences.") should return "Crazy!!!Strange???Unconventional...Sentences.".', () => {
        expect(capitalize("crazy!!!strange???unconventional...sentences."))
        .toEqual("Crazy!!!Strange???Unconventional...Sentences.");
    });
    test('5. capitalize("there\'s a space before this period . why is there a space before that period ?") should return "There\'s a space before this period . Why is there a space before that period ?".', () => {
        expect(capitalize("there's a space before this period . why is there a space before that period ?"))
        .toEqual("There's a space before this period . Why is there a space before that period ?");
    });
});