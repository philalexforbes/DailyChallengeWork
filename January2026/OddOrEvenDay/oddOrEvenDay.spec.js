const oddOrEvenDay = require('./oddOrEvenDay');

describe('Return odd or even if the day in the time stamp is an odd or even day', () => {
    test('1. oddOrEvenDay(1769472000000) should return "odd".', () => {
        expect(oddOrEvenDay(1769472000000)).toEqual('odd');
    });
    test('2. oddOrEvenDay(1769444440000) should return "even".', () => {
        expect(oddOrEvenDay(1769444440000)).toEqual('even');
    });
    test('3. oddOrEvenDay(6739456780000) should return "odd".', () => {
        expect(oddOrEvenDay(6739456780000)).toEqual('odd');
    });
    test('4. oddOrEvenDay(1) should return "odd".', () => {
        expect(oddOrEvenDay(1)).toEqual('odd');
    });
    test('5. oddOrEvenDay(86400000) should return "even".', () => {
        expect(oddOrEvenDay(86400000)).toEqual('even');
    });
});