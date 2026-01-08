const convertListItem = require('./convertListItem');

describe('Verify that list items are returned when expected', () =>{
    test('convertListItem("1. My item") should return "<li>My item</li>".', ()=> {
        expect(convertListItem('1. My item')).toEqual('<li>My item</li>');
    });
    test('convertListItem(" 1.  Another item") should return "<li>Another item</li>".', ()=>{
        expect(convertListItem(' 1.  Another item')).toEqual('<li>Another item</li>');
    });
    test('convertListItem("1 . invalid item") should return "Invalid format".', () => {
        expect(convertListItem('1 . invalid item')).toEqual('Invalid format');
    });
    test('convertListItem("2. list item text") should return "<li>list item text</li>".', ()=>{
        expect(convertListItem('2. list item text')).toEqual('<li>list item text</li>');
    });
    test('convertListItem(". invalid again") should return "Invalid format".', ()=>{
        expect(convertListItem('. invalid again')).toEqual('Invalid format');
    });
    test('convertListItem("A. last invalid") should return "Invalid format".', ()=> {
        expect(convertListItem('A. last invalid')).toEqual('Invalid format');
    });
})