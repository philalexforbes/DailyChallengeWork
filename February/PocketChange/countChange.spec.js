const countChange = require('./countChange');

describe('Count the user\'s change and return the correct amount.', () => {
    test('1. countChange([25, 10, 5, 1]) should return "$0.41".', () => {
        expect(countChange([25, 10, 5, 1])).toEqual('$0.41');
    });
    test('2. countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25]) should return "$1.43".', () => {
        expect(countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25])).toEqual('$1.43');
    });
    test('3. countChange([100, 25, 100, 1000, 5, 500, 2000, 25]) should return "$37.55".', () => {
        expect(countChange([100, 25, 100, 1000, 5, 500, 2000, 25])).toEqual('$37.55');
    });
    test('4. countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10]) should return "$0.70".', () => {
        expect(countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10])).toEqual('$0.70');
    });
    test('5. countChange([1]) should return "$0.01".', () => {
        expect(countChange([1])).toEqual('$0.01');
    });
    test('6. countChange([25, 25, 25, 25]) should return "$1.00".', () => {
        expect(countChange([25, 25, 25, 25])).toEqual('$1.00');
    });
});