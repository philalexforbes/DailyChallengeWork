const decodeMorse = require('./decodeMorse');

describe('Given a Morse code string decode the message.', () => {
    test('1. decodeMorse("--..") should return "Z".', () => {
        expect(decodeMorse("--.."))
        .toEqual("Z");
    });
    test('2. decodeMorse("... --- ...") should return "SOS".', () => {
        expect(decodeMorse("... --- ..."))
        .toEqual("SOS");
    });
    test('3. decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--.") should return "FREECODECAMP".', () => {
        expect(decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--."))
        .toEqual("FREECODECAMP");
    });
    test('4. decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..") should return "HELLO WORLD".', () => {
        expect(decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -.."))
        .toEqual("HELLO WORLD");
    });
    test('5. decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.") should return "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG".', () => {
        expect(decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --."))
        .toEqual("THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG");
    });
});