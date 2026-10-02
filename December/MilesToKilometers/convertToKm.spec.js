const convertToKm = require('./convertToKm');

describe('Conversion to KM from Miles', () => {
    test('convertToKm(1) should return 1.61.', ()=>{
        expect(convertToKm(1)).toEqual(1.61);
    });
    test('convertToKm(21) should return 33.8.', ()=>{
        expect(convertToKm(21)).toEqual(33.8);
    });
    test('convertToKm(3.5) should return 5.63.', ()=>{
        expect(convertToKm(3.5)).toEqual(5.63);
    });
    test('convertToKm(0) should return 0.', ()=>{
        expect(convertToKm(0)).toEqual(0);
    });
    test('convertToKm(0.621371) should return 1.', ()=>{
        expect(convertToKm(0.621371)).toEqual(1);
    });
});