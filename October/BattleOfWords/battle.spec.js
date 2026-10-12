const battle = require('./battle');

describe('Given sentences with the same amount of words determine the winner.', () => {
    test('1. battle("hello world", "hello word") should return "We win".', () => {
        expect(battle("hello world", "hello word")).toEqual("We win");
    });
    test('2. battle("Hello world", "hello world") should return "We win".', () => {
        expect(battle("Hello world", "hello world")).toEqual("We win");
    });
    test('3. battle("lorem ipsum", "kitty ipsum") should return "We lose".', () => {
        expect(battle("lorem ipsum", "kitty ipsum")).toEqual("We lose");
    });
    test('4. battle("hello world", "world hello") should return "Draw".', () => {
        expect(battle("hello world", "world hello")).toEqual("Draw");
    });
    test('5. battle("git checkout", "git switch") should return "We win".', () => {
        expect(battle("git checkout", "git switch")).toEqual("We win");
    });
    test('6. battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".', () => {
        expect(battle("Cheeseburger with fries", "Cheeseburger with Fries")).toEqual("We lose");
    });
    test('7. battle("We must never surrender", "Our team must win") should return "Draw".', () => {
        expect(battle("We must never surrender", "Our team must win")).toEqual("Draw");
    });
});