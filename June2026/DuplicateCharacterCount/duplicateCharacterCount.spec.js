const duplicateCharacterCount = require('./duplicateCharacterCount');

describe('Given two strings return the number of characters from the second string that can be found in the first.', () => {
    test('1. duplicateCharacterCount("aloha", "hei") should return 1.', () => {
        expect(duplicateCharacterCount("aloha", "hei")).toEqual(1);
    });
    test('2. duplicateCharacterCount("jambo", "bonjour") should return 4.', () => {
        expect(duplicateCharacterCount("jambo", "bonjour")).toEqual(4);
    });
    test('3. duplicateCharacterCount("hello", "hola") should return 3.', () => {
        expect(duplicateCharacterCount("hello", "hola")).toEqual(3);
    });
    test('4. duplicateCharacterCount("ola", "hej") should return 0.', () => {
        expect(duplicateCharacterCount("ola", "hej")).toEqual(0);
    });
    test('5. duplicateCharacterCount("ciao", "konnichiwa") should return 5.', () => {
        expect(duplicateCharacterCount("ciao", "konnichiwa")).toEqual(5);
    });
    test('6. duplicateCharacterCount("merhaba", "xin chao") should return 2.', () => {
        expect(duplicateCharacterCount("merhaba", "xin chao")).toEqual(2);
    });
    test('7. duplicateCharacterCount("hello world", "hello to everyone around the world") should return 26.', () => {
        expect(duplicateCharacterCount("hello world", "hello to everyone around the world")).toEqual(26);
    });
});