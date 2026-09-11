const reverseSentence = require('./reverseSentence');

describe('Given a sentence return the sentence reversed and with normal spacing.', () => {
    test('1. reverseSentence("world hello") should return "hello world".', () => {
        expect(reverseSentence("world hello")).toEqual("hello world");
    });
    test('2. reverseSentence("push commit git") should return "git commit push".', () => {
        expect(reverseSentence("push commit git")).toEqual("git commit push");
    });
    test('3. reverseSentence("npm  install  sudo") should return "sudo install npm".', () => {
        expect(reverseSentence("npm  install  sudo")).toEqual("sudo install npm");
    });
    test('4. reverseSentence("import    default   function  export") should return "export function default import".', () => {
        expect(reverseSentence("import    default   function  export")).toEqual("export function default import");
    });
});