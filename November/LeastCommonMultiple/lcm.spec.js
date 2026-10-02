const lcm = require('./lcm');

describe('Verify that the correct first lcm is returned for each pair of integers', () => {
    test('lcm(4, 6) should return 12.', ()=>{
        expect(lcm(4, 6)).toEqual(12);
    });

    test('lcm(9, 6) should return 18', ()=>{
        expect(lcm(9, 6)).toEqual(18);
    });

    test('lcm(10, 100) should return 100.', ()=>{
        expect(lcm(10, 100)).toEqual(100);
    });

    test('lcm(13, 17) should return 221.', ()=>{
        expect(lcm(13, 17)).toEqual(221);
    });

    test('lcm(45, 70) should return 630.', ()=>{
        expect(lcm(45, 70)).toEqual(630);
    });
});