const calculateStartDelays = require('./calculateStartDelays');

describe('Correctly calulate the start delay times given the jump scores.', () => {
    test('1. calculateStartDelays([120, 110, 125]) should return [8, 23, 0].', () => {
        expect(calculateStartDelays([120, 110, 125])).toEqual([8, 23, 0]);
    });
    test('2. calculateStartDelays([118, 125, 122, 120]) should return [11, 0, 5, 8].', () => {
        expect(calculateStartDelays([118, 125, 122, 120])).toEqual([11, 0, 5, 8]);
    });
    test('3. calculateStartDelays([100, 105, 95, 110, 120, 115, 108]) should return [30, 23, 38, 15, 0, 8, 18].', () => {
        expect(calculateStartDelays([100, 105, 95, 110, 120, 115, 108])).toEqual([30, 23, 38, 15, 0, 8, 18]);
    });
    test('4. calculateStartDelays([130, 125, 128, 120, 118, 122, 127, 115, 132, 124]) should return [3, 11, 6, 18, 21, 15, 8, 26, 0, 12].', () => {
        expect(calculateStartDelays([130, 125, 128, 120, 118, 122, 127, 115, 132, 124])).toEqual([3, 11, 6, 18, 21, 15, 8, 26, 0, 12]);
    });
})