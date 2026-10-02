const daylightHours = require('./daylightHours');

describe('Latitude returns the hours of daylight', () => {
    test('1. daylightHours(45) should return 9.', ()=> {
        expect(daylightHours(45)).toEqual(9);
    });
    test('2. daylightHours(0) should return 12.', ()=> {
        expect(daylightHours(0)).toEqual(12);
    });
    test('3. daylightHours(-90) should return 24.', ()=> {
        expect(daylightHours(-90)).toEqual(24);
    });
    test('4. daylightHours(-10) should return 12', ()=> {
        expect(daylightHours(-10)).toEqual(12);
    });
    test('5. daylightHours(23) should return 10.', ()=> {
        expect(daylightHours(23)).toEqual(10);
    });
    test('6. daylightHours(88) should return 0.', ()=> {
        expect(daylightHours(88)).toEqual(0);
    });
    test('7. daylightHours(-33) should return 13.', ()=> {
        expect(daylightHours(-33)).toEqual(13);
    });
    test('8. daylightHours(70) should return 2.', ()=> {
        expect(daylightHours(70)).toEqual(2);
    });
})