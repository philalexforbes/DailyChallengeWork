const checkEligibility = require('./checkEligibility');

describe('Return Eligible or Not Eligible given the weight for the team and the weight for the sled, correctly.', () => {
    test('1. checkEligibility([78], 165) should return "Eligible".', () => {
        expect(checkEligibility([78], 165)).toEqual('Eligible');
    });
    test('2. checkEligibility([80], 160) should return "Not Eligible".', () => {
        expect(checkEligibility([80], 160)).toEqual('Not Eligible');
    });
    test('3. checkEligibility([80], 170) should return "Not Eligible".', () => {
        expect(checkEligibility([80], 170)).toEqual('Not Eligible');
    });
    test('4. checkEligibility([85, 90], 170) should return "Eligible".', () => {
        expect(checkEligibility([85, 90], 170)).toEqual('Eligible');
    });
    test('5. checkEligibility([85, 95], 168) should return "Not Eligible".', () => {
        expect(checkEligibility([85, 95], 168)).toEqual('Not Eligible');
    });
    test('6. checkEligibility([112, 97], 185) should return "Not Eligible".', () => {
        expect(checkEligibility([112, 97], 185)).toEqual('Not Eligible');
    });
    test('7. checkEligibility([110, 102, 90, 106], 222) should return "Eligible".', () => {
        expect(checkEligibility([110, 102, 90, 106], 222)).toEqual('Eligible');
    });
    test('8. checkEligibility([106, 99, 90, 88], 205) should return "Not Eligible".', () => {
        expect(checkEligibility([106, 99, 90, 88], 205)).toEqual('Not Eligible');
    });
    test('9. checkEligibility([106, 99, 103, 96], 227) should return "Not Eligible".', () => {
        expect(checkEligibility([106, 99, 103, 96], 227)).toEqual('Not Eligible');
    });
});