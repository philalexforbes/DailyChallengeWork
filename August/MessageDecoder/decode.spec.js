const decode = require('./decode');

describe('Given a secret message return the decoded message.', () => {
    test('1. decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."', () => {
        expect(decode("Xlmw mw e wigvix qiwweki.", 4)).toEqual("This is a secret message.");
    });
    test('2. decode("Byffi Qilfx!", 20) should return "Hello World!"', () => {
        expect(decode("Byffi Qilfx!", 20)).toEqual("Hello World!");
    });
    test('3. decode("Zqd xnt njzx?", -1) should return "Are you okay?"', () => {
        expect(decode("Zqd xnt njzx?", -1)).toEqual("Are you okay?");
    });
    test('4. decode("oannLxmnLjvy", 9) should return "freeCodeCamp"', () => {
        expect(decode("oannLxmnLjvy", 9)).toEqual("freeCodeCamp");
    });
});