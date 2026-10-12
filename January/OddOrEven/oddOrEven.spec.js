const oddOrEven = require('./oddOrEven');

describe('Determine correctly if the number is odd or even.', () => {
    test('1. oddOrEven(1) should return "Odd".', () => {
        expect(oddOrEven(1)).toEqual('Odd');
    });
    test('2. oddOrEven(2) should return "Even".', () => {
        expect(oddOrEven(2)).toEqual('Even');
    });
    test('3. oddOrEven(13) should return "Odd".', () => {
        expect(oddOrEven(13)).toEqual('Odd');
    });
    test('4. oddOrEven(196) should return "Even".', () => {
        expect(oddOrEven(196)).toEqual('Even');
    });
    test('5. oddOrEven(123456789) should return "Odd".', () => {
        expect(oddOrEven(123456789)).toEqual('Odd');
    });
})