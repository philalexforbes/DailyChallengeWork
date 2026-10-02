const numberOfPhotos = require('./numberOfPhotos');

describe('Given a photo size in mb and the hd size in gb return the number of photos that can be stored.', () => {
    test('1. numberOfPhotos(1, 1) should return 1000.', () => {
        expect(numberOfPhotos(1, 1)).toEqual(1000);
    });
    test('2. numberOfPhotos(2, 1) should return 500.', () => {
        expect(numberOfPhotos(2, 1)).toEqual(500);
    });
    test('3. numberOfPhotos(4, 256) should return 64000.', () => {
        expect(numberOfPhotos(4, 256)).toEqual(64000);
    });
    test('4. numberOfPhotos(3.5, 750) should return 214285.', () => {
        expect(numberOfPhotos(3.5, 750)).toEqual(214285);
    });
    test('5. numberOfPhotos(3.5, 5.5) should return 1571.', () => {
        expect(numberOfPhotos(3.5, 5.5)).toEqual(1571);
    });
});