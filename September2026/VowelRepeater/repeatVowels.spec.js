const repeatVowels = require('./repeatVowels');

describe('Given a string with vowels. Repeat the vowels according to the occurence of the vowel.', () =>{
    test('1. repeatVowels("hello world") should return "helloo wooorld".', () => {
        expect(repeatVowels("hello world"))
        .toEqual("helloo wooorld");
    });
    test('2. repeatVowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp".', () => {
        expect(repeatVowels("freeCodeCamp"))
        .toEqual("freeeCooodeeeeCaaaaamp");
    });
    test('3. repeatVowels("AEIOU") should return "AEeIiiOoooUuuuu".', () => {
        expect(repeatVowels("AEIOU"))
        .toEqual("AEeIiiOoooUuuuu");
    });
    test('4. repeatVowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand".', () => {
        expect(repeatVowels("I like eating ice cream in Iceland"))
        .toEqual("I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand");
    });
});