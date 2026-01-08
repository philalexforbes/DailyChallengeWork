const speedCheck = require('./speedCheck');

describe('Verify if the driver is speeding', () => {
    test('speedCheck(30, 70) should return "Not Speeding".', ()=> {
        expect(speedCheck(30, 70)).toEqual('Not Speeding');
    });
    test('speedCheck(40, 60) should return "Warning".', ()=> {
        expect(speedCheck(40, 60)).toEqual('Warning');
    });
    test('speedCheck(40, 65) should return "Not Speeding".', ()=> {
        expect(speedCheck(40, 65)).toEqual('Not Speeding');
    });
    test('speedCheck(60, 90) should return "Ticket".', ()=> {
        expect(speedCheck(60, 90)).toEqual('Ticket');
    });
    test('speedCheck(65, 100) should return "Warning".', ()=> {
        expect(speedCheck(65, 100)).toEqual('Warning');
    });
    test('speedCheck(88, 40) should return "Ticket".', ()=> {
        expect(speedCheck(88, 40)).toEqual('Ticket');
    });
})