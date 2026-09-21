const numberOfVideos = require('./numberOfVideos');

describe('Given a video size, video storage unit, drive size, and drive storage unit. Return the number of videos that can be stored.', () => {
    test('1. numberOfVideos(500, "MB", 100, "GB") should return 200.', () => {
        expect(numberOfVideos(500, "MB", 100, "GB")).toEqual(200);
    });
    test('2. numberOfVideos(1, "TB", 10, "TB") should return "Invalid video unit".', () => {
        expect(numberOfVideos(1, "TB", 10, "TB")).toEqual("Invalid video unit");
    });
    test('3. numberOfVideos(2000, "MB", 100000, "MB") should return "Invalid drive unit".', () => {
        expect(numberOfVideos(2000, "MB", 100000, "MB")).toEqual("Invalid drive unit");
    });
    test('4. numberOfVideos(500000, "KB", 2, "TB") should return 4000.', () => {
        expect(numberOfVideos(500000, "KB", 2, "TB")).toEqual(4000);
    });
    test('5. numberOfVideos(1.5, "GB", 2.2, "TB") should return 1466.', () => {
        expect(numberOfVideos(1.5, "GB", 2.2, "TB")).toEqual(1466);
    });
});