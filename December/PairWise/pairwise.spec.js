const pairwise = require('./pairwise');

describe('Verify that the sum of indices return the target number', ()=> {
    test('1. pairwise([2, 3, 4, 6, 8], 10) should return 9.', ()=> {
        expect(pairwise([2, 3, 4, 6, 8], 10)).toEqual(9);
    });
    test('2. pairwise([4, 1, 5, 2, 6, 3], 7) should return 15.', ()=> {
        expect(pairwise([4, 1, 5, 2, 6, 3], 7)).toEqual(15);
    });
    test('3. pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20) should return 22.', ()=> {
        expect(pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20)).toEqual(22);
    });
    test('4. pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24) should return 10.', ()=> {
        expect(pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24)).toEqual(10);
    });
});