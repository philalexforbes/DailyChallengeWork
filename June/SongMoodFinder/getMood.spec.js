const getMood = require('./getMood');

describe('Given a genre and the bpm return the correct mood.', () => {
    test('1. getMood("rock", 111) should return "happy".', () => {
        expect(getMood("rock", 111)).toEqual("happy");
    });
    test('2. getMood("electronic", 74) should return "focus".', () => {
        expect(getMood("electronic", 74)).toEqual("focus");
    });
    test('3. getMood("classical", 180) should return "happy".', () => {
        expect(getMood("classical", 180)).toEqual("happy");
    });
    test('4. getMood("rock", 155) should return "hype".', () => {
        expect(getMood("rock", 155)).toEqual("hype");
    });
    test('5. getMood("electronic", 90) should return "happy".', () => {
        expect(getMood("electronic", 90)).toEqual("happy");
    });
    test('6. getMood("classical", 67) should return "focus".', () => {
        expect(getMood("classical", 67)).toEqual("focus");
    });
    test('7. getMood("pop", 100) should return "happy".', () => {
        expect(getMood("pop", 100)).toEqual("happy");
    });
    test('8. getMood("electronic", 135) should return "hype".', () => {
        expect(getMood("electronic", 135)).toEqual("hype");
    });
});