const sendMessage = require('./sendMessage');

describe('Given a route in an array return the amount of time it will take to send the message.', () => {
    test('1. sendMessage([300000, 300000]) should return 2.5.', () => {
        expect(sendMessage([300000, 300000])).toEqual(2.5);
    });
    test('2. sendMessage([384400, 384400]) should return 3.0627.', () => {
        expect(sendMessage([384400, 384400])).toEqual(3.0627);
    });
    test('3. sendMessage([54600000, 54600000]) should return 364.5.', () => {
        expect(sendMessage([54600000, 54600000])).toEqual(364.5);
    });
    test('4. sendMessage([1000000, 500000000, 1000000]) should return 1674.3333.', () => {
        expect(sendMessage([1000000, 500000000, 1000000])).toEqual(1674.3333);
    });
    test('5. sendMessage([10000, 21339, 50000, 31243, 10000]) should return 2.4086.', () => {
        expect(sendMessage([10000, 21339, 50000, 31243, 10000])).toEqual(2.4086);
    });
    test('6. sendMessage([802101, 725994, 112808, 3625770, 481239]) should return 21.1597.', () => {
        expect(sendMessage([802101, 725994, 112808, 3625770, 481239])).toEqual(21.1597);
    });
});