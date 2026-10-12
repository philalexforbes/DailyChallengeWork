const sleepDebt = require('./sleepDebt');

describe('Given an array of sleep hours and the targetted hour of sleep each night return the number of sleep needed to make up that debt.', () => {
    test('1. sleepDebt([6, 6, 6, 6, 6, 6], 8) should return 20.', () => {
        expect(sleepDebt([6, 6, 6, 6, 6, 6], 8)).toEqual(20);
    });
    test('2. sleepDebt([6, 7, 8, 4, 8, 6], 7) should return 10.', () => {
        expect(sleepDebt([6, 7, 8, 4, 8, 6], 7)).toEqual(10);
    });
    test('3. sleepDebt([10, 10, 9, 10, 9, 11], 9) should return 4.', () => {
        expect(sleepDebt([10, 10, 9, 10, 9, 11], 9)).toEqual(4);
    });
    test('4. sleepDebt([8, 7, 6, 7, 6, 8], 6) should return 0.', () => {
        expect(sleepDebt([8, 7, 6, 7, 6, 8], 6)).toEqual(0);
    });
    test('5. sleepDebt([8, 9, 10, 9, 10, 7], 7) should return 0.', () => {
        expect(sleepDebt([8, 9, 10, 9, 10, 7], 7)).toEqual(0);
    });
});