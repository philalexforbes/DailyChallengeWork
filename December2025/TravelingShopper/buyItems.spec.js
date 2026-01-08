const buyItems = require('./buyItems');

describe('How many items can the buyer purchase after converting their money', () => {
    test('1. buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]) should return "Buy the first 2 items.".', ()=>{
        expect(buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]])).toEqual('Buy the first 2 items.');
    });
    test('2. buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]) should return "Buy them all!".', ()=>{
        expect(buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]])).toEqual('Buy them all!');
    });
    test('3. buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]) should return "Buy the first 3 items.".', ()=>{
        expect(buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]])).toEqual('Buy the first 3 items.');
    });
    test('4. buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]) should return "Buy them all!".', ()=>{
        expect(buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]])).toEqual('Buy them all!');
    });
    test('5. buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]) should return "Buy the first 5 items.".', ()=>{
        expect(buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]])).toEqual('Buy the first 5 items.');
    });
});