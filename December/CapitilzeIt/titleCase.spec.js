const titleCase = require('./titleCase');

describe('Each word in a string is capitalized', () => {
    test('titleCase("hello world") should return "Hello World".', ()=> {
        expect(titleCase('hello world')).toEqual('Hello World');
    });
    test('titleCase("the quick brown fox") should return "The Quick Brown Fox".', ()=> {
        expect(titleCase('the quick brown fox')).toEqual('The Quick Brown Fox');
    });
    test('titleCase("JAVASCRIPT AND PYTHON") should return "Javascript And Python".', ()=> {
        expect(titleCase('JAVASCRIPT AND PYTHON')).toEqual('Javascript And Python');
    });
    test('titleCase("AvOcAdO tOAst fOr brEAkfAst") should return "Avocado Toast For Breakfast".', ()=> {
        expect(titleCase('AvOcAdO tOAst fOr brEAkfAst')).toEqual('Avocado Toast For Breakfast');
    });
})