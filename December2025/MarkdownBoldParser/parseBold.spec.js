const parseBold = require('./parseBold');

describe('Verify inputs of ** and __ return bold markdown', () =>{
    test('parseBold("**This is bold**") should return "<b>This is bold</b>".', ()=> {
        expect(parseBold('**This is bold**')).toEqual('<b>This is bold</b>');
    });
    test('parseBold("__This is also bold__") should return "<b>This is also bold</b>".', ()=> {
        expect(parseBold('__This is also bold__')).toEqual('<b>This is also bold</b>');
    });
    test('parseBold("**This is not bold **") should return "**This is not bold **".', ()=> {
        expect(parseBold('**This is not bold **')).toEqual('**This is not bold **');
    });
    test('parseBold("__ This is also not bold__") should return "__ This is also not bold__".', ()=> {
        expect(parseBold('__ This is also not bold__')).toEqual('__ This is also not bold__');
    });
    test('parseBold("The **quick** brown fox __jumps__ over the **lazy** dog.") should return "The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.".', ()=> {
        expect(parseBold('The **quick** brown fox __jumps__ over the **lazy** dog.')).toEqual('The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.');
    });
});