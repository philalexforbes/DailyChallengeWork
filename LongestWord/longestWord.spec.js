const longestWord = require('./longestWord');

describe('Return the longest word in the provided sentence', ()=> {
    test('longestWord("The quick red fox") should return "quick"', ()=>{
        expect(longestWord('The quick red fox')).toEqual('quick');
    });

    test('longestWord("Hello coding challenge.") should return "challenge"', ()=>{
        expect(longestWord('Hello coding challenge.')).toEqual('challenge');
    });

    test('longestWord("Do Try This At Home.") should return "This"', ()=>{
        expect(longestWord('Do Try This At Home.')).toEqual('This');
    });

    test('longestWord("This sentence... has commas, ellipses, and an exlamation point!") should return "exlamation"', ()=>{
        expect(longestWord('This sentence... has commas, ellipses, and an exlamation point!')).toEqual('exlamation');
    });

    test('longestWord("A tie? No way!") should return "tie"', ()=>{
        expect(longestWord('A tie? No way!')).toEqual('tie');
    });

    test('longestWord("Wouldn\'t you like to know.") should return "Wouldnt"', ()=> {
        expect(longestWord('Wouldn\'t you like to know.')).toEqual('Wouldnt');
    });
})