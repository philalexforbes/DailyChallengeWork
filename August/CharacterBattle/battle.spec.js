const battle = require('./battle');

describe('Given two strings determine the outcome of the battle.', () => {
    test('1. battle("Hello", "World") should return "We lost".', () => {
        expect(battle("Hello", "World")).toEqual("We lost");
    });
    test('2. battle("pizza", "salad") should return "We won".', () => {
        expect(battle("pizza", "salad")).toEqual("We won");
    });
    test('3. battle("C@T5", "D0G$") should return "We won".', () => {
        expect(battle("C@T5", "D0G$")).toEqual("We won");
    });
    test('4. battle("kn!ght", "orc") should return "Opponent retreated".', () => {
        expect(battle("kn!ght", "orc")).toEqual("Opponent retreated");
    });
    test('5. battle("PC", "Mac") should return "We retreated".', () => {
        expect(battle("PC", "Mac")).toEqual("We retreated");
    });
    test('6. battle("Wizards", "Dragons") should return "It was a tie".', () => {
        expect(battle("Wizards", "Dragons")).toEqual("It was a tie");
    });
    test('7. battle("Mr. Smith", "Dr. Jones") should return "It was a tie".', () => {
        expect(battle("Mr. Smith", "Dr. Jones")).toEqual("It was a tie");
    });
});