const canDonate = require('./canDonate');

describe('Determine if a donor can donate blood to the recipient given their blood types.', () => {
    test('1. canDonate("B+", "B+") should return true.', () => {
        expect(canDonate("B+", "B+")).toEqual(true);
    });
    test('2. canDonate("O-", "AB-") should return true.', () => {
        expect(canDonate("O-", "AB-")).toEqual(true);
    });
    test('3. canDonate("O+", "A-") should return false.', () => {
        expect(canDonate("O+", "A-")).toEqual(false);
    });
    test('4. canDonate("A+", "AB+") should return true.', () => {
        expect(canDonate("A+", "AB+")).toEqual(true);
    });
    test('5. canDonate("A-", "B-") should return false.', () => {
        expect(canDonate("A-", "B-")).toEqual(false);
    });
    test('6. canDonate("B-", "AB+") should return true.', () => {
        expect(canDonate("B-", "AB+")).toEqual(true);
    });
    test('7. canDonate("B-", "A+") should return false.', () => {
        expect(canDonate("B-", "A+")).toEqual(false);
    });
    test('8. canDonate("O-", "O+") should return true.', () => {
        expect(canDonate("O-", "O+")).toEqual(true);
    });
    test('9. canDonate("O+", "O-") should return false.', () => {
        expect(canDonate("O+", "O-")).toEqual(false);
    });
    test('10. canDonate("AB+", "AB-") should return false.', () => {
        expect(canDonate("AB+", "AB-")).toEqual(false);
    });
});