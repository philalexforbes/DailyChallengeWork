const scaleImage = require('./scaleImage');

describe('Verify the correct scaled dimensions are returned from the inputed dimension and scale', () => {
    test('1. scaleImage("800x600", 2) should return "1600x1200".', () => {
        expect(scaleImage("800x600", 2)).toEqual('1600x1200');
    });
    test('2. scaleImage("100x100", 10) should return "1000x1000".', () => {
        expect(scaleImage("100x100", 10)).toEqual('1000x1000');
    });
    test('3. scaleImage("1024x768", 0.5) should return "512x384".', () => {
        expect(scaleImage("1024x768", 0.5)).toEqual('512x384');
    });
    test('4. scaleImage("300x200", 1.5) should return "450x300".', () => {
        expect(scaleImage("300x200", 1.5)).toEqual('450x300');
    });
});