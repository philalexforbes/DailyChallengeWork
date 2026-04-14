const getLastLetter = require('./getLastLetter');

describe('Given a string return the last letter in the alphabet from the string.', () => {
    test('1. getLastLetter("world") should return "w".', () =>{
        expect(getLastLetter("world")).toEqual("w");        
    });
    test('2. getLastLetter("Hello World") should return "W".', () =>{
        expect(getLastLetter("Hello World")).toEqual("W");        
    });
    test('3. getLastLetter("The quick brown fox jumped over the lazy dog.") should return "z".', () =>{
        expect(getLastLetter("The quick brown fox jumped over the lazy dog.")).toEqual("z");        
    });
    test('4. getLastLetter("HeLl0") should return "L".', () =>{
        expect(getLastLetter("HeLl0")).toEqual("L");        
    });
    test('5. getLastLetter("!#$ er@R asd fT.,> 2t0e9") should return "T".', () =>{
        expect(getLastLetter("!#$ er@R asd fT.,> 2t0e9")).toEqual("T");        
    });
})