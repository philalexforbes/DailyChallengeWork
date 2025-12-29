const fuelToAdd = require('./fuelToAdd');

describe('Return the amount of fuel needed', ()=> {
    test('1. fuelToAdd(0, 1) should return 1.', ()=> {
        expect(fuelToAdd(0, 1)).toEqual(1);
    });
    test('2. fuelToAdd(5, 40) should return 6.', ()=> {
        expect(fuelToAdd(5, 40)).toEqual(6);
    });
    test('3. fuelToAdd(10, 30) should return 0.', ()=> {
        expect(fuelToAdd(10, 30)).toEqual(0);
    });
    test('4. fuelToAdd(896, 20500) should return 4520.', ()=> {
        expect(fuelToAdd(896, 20500)).toEqual(4520);
    });
    test('5. fuelToAdd(1000, 50000) should return 12209.', ()=> {
        expect(fuelToAdd(1000, 50000)).toEqual(12209);
    });
});