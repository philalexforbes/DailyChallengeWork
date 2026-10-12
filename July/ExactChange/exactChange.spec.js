const exactChange = require('./exactChange');

describe('Given an integer that represent cents return the number of distinct ways to make exact change.', () => {
    test('1. exactChange(3) should return 1.', () => {
        expect(exactChange(3)).toEqual(1);
    });
    test('2. exactChange(9) should return 2.', () => {
        expect(exactChange(9)).toEqual(2);
    });
    test('3. exactChange(17) should return 6.', () => {
        expect(exactChange(17)).toEqual(6);
    });
    test('4. exactChange(39) should return 24.', () => {
        expect(exactChange(39)).toEqual(24);
    });
    test('5. exactChange(61) should return 73.', () => {
        expect(exactChange(61)).toEqual(73);
    });
    test('6. exactChange(99) should return 213.', () => {
        expect(exactChange(99)).toEqual(213);
    });
});