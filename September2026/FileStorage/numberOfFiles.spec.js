const numberOfFiles = require('./numberOfFiles');

describe('Given a file size, the unit, and drive size return the number of files that can be stored.', () => {
    test('1. numberOfFiles(500, "KB", 1) should return 2000.', () => {
        expect(numberOfFiles(500, "KB", 1)).toEqual(2000);
    });
    test('2. numberOfFiles(50000, "B", 1) should return 20000.', () => {
        expect(numberOfFiles(50000, "B", 1)).toEqual(20000);
    });
    test('3. numberOfFiles(5, "MB", 1) should return 200.', () => {
        expect(numberOfFiles(5, "MB", 1)).toEqual(200);
    });
    test('4. numberOfFiles(4096, "B", 1.5) should return 366210.', () => {
        expect(numberOfFiles(4096, "B", 1.5)).toEqual(366210);
    });
    test('5. numberOfFiles(220.5, "KB", 100) should return 453514.', () => {
        expect(numberOfFiles(220.5, "KB", 100)).toEqual(453514);
    });
    test('6. numberOfFiles(4.5, "MB", 750) should return 166666.', () => {
        expect().toEqual();
    });
});