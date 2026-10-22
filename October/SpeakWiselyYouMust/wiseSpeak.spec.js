const wiseSpeak = require('./wiseSpeak');

describe('Given a sentence, return the wise teach version split by the specified word.', () => {
    test('1. wiseSpeak("You must speak wisely.") should return "Speak wisely, you must."', () => {
        expect(wiseSpeak("You must speak wisely."))
        .toEqual("Speak wisely, you must.");
    });
    test('2. wiseSpeak("You can do it!") should return "Do it, you can!"', () => {
        expect(wiseSpeak("You can do it!"))
        .toEqual("Do it, you can!");
    });
    test('3. wiseSpeak("Do you think you will complete this?") should return "Complete this, do you think you will?"', () => {
        expect(wiseSpeak("Do you think you will complete this?"))
        .toEqual("Complete this, do you think you will?");
    });
    test('4. wiseSpeak("All your base are belong to us.") should return "Belong to us, all your base are."', () => {
        expect(wiseSpeak("All your base are belong to us."))
        .toEqual("Belong to us, all your base are.");
    });
    test('5. wiseSpeak("You have much to learn.") should return "Much to learn, you have."', () => {
        expect(wiseSpeak("You have much to learn."))
        .toEqual("Much to learn, you have.");
    });
});