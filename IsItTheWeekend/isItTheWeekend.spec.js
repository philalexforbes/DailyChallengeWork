const isItTheWeekend = require('./isItTheWeekend');

describe('Is It The Weekend', () => {
    test('Friday returns 1 day until the weekend', () => {
        expect(isItTheWeekend('2025-11-14')).toEqual('1 day until the weekend.');
    });
    test('Wednesday returns 3 days until the weekend', () => {
        expect(isItTheWeekend('2025-01-01')).toEqual('3 days until the weekend.');
    });
    test('Thursday returns 2 days until the weekend', () => {
        expect(isItTheWeekend('2026-02-26')).toEqual('2 days until the weekend.');
    });
    test('Saturday returns It\'s the weekend!', () => {
        expect(isItTheWeekend('2025-12-06')).toEqual('It\'s the weekend!');
    });
    test('Tuesday returns 4 days until the weekend', () => {
        expect(isItTheWeekend('2026-01-27')).toEqual('4 days until the weekend.');
    });
    test('Monday returns 5 days until the weekend', () => {
        expect(isItTheWeekend('2026-09-07')).toEqual('5 days until the weekend.');
    });
    test('Sunday returns It\'s the weekend', () => {
        expect(isItTheWeekend('2026-11-29')).toEqual('It\'s the weekend!');
    });
});