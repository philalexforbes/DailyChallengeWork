const oneHundred = require('./oneHundred');

describe('Verify oneHundred function prints 100 characters from specified input', ()=> {
    
    test('"One hundred "returns "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One "', () => {
        expect(oneHundred('One hundred ')).toEqual('One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ');
    });

    test('"freeCodeCamp " returns "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC"', ()=> {
        expect(oneHundred('freeCodeCamp ')).toEqual('freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC');
    });
    
    test('"daily challenges " returns "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge"', () => {
        expect(oneHundred('daily challenges ')).toEqual('daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge');
    });

    test('"!" returns "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"', ()=>{
        expect(oneHundred('!')).toEqual('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    });
});