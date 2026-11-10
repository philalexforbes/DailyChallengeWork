const getExtension = require('./getExtension');

describe('Given a file name return the extension if it exists.', () => {
    test('1. getExtension("document.txt") should return "txt".', () => {
        expect(getExtension("document.txt")).toEqual("txt");
    });
    test('2. getExtension("README") should return "none".', () => {
        expect(getExtension("README")).toEqual("none");
    });
    test('3. getExtension("image.PNG") should return "PNG".', () => {
        expect(getExtension("image.PNG")).toEqual("PNG");
    });
    test('4. getExtension(".gitignore") should return "gitignore".', () => {
        expect(getExtension(".gitignore")).toEqual("gitignore");
    });
    test('5. getExtension("archive.tar.gz") should return "gz".', () => {
        expect(getExtension("archive.tar.gz")).toEqual("gz");
    });
    test('6. getExtension("final.draft.") should return "none".', () => {
        expect(getExtension("final.draft.")).toEqual("none");
    });
});