const getWiderAspectRatio = require('./getWiderAspectRatio');

describe('Given two image dimensions return the aspect ratio of the image with the greater width to height ratio.', () => {
    test('1. getWiderAspectRatio("1920x1080", "800x600") should return "16:9".', () => {
        expect(getWiderAspectRatio("1920x1080", "800x600")).toEqual("16:9");
    });
    test('2. getWiderAspectRatio("1080x1350", "2048x1536") should return "4:3".', () => {
        expect(getWiderAspectRatio("1080x1350", "2048x1536")).toEqual("4:3");
    });
    test('3. getWiderAspectRatio("640x480", "2440x1220") should return "2:1".', () => {
        expect(getWiderAspectRatio("640x480", "2440x1220")).toEqual("2:1");
    });
    test('4. getWiderAspectRatio("360x640", "1080x1920") should return "9:16".', () => {
        expect(getWiderAspectRatio("360x640", "1080x1920")).toEqual("9:16");
    });
    test('5. getWiderAspectRatio("3440x1440", "2048x858") should return "43:18".', () => {
        expect(getWiderAspectRatio("3440x1440", "2048x858")).toEqual("43:18");
    });
    test('6. getWiderAspectRatio("12345x61234", "12534x51234") should return "2089:8539".', () => {
        expect(getWiderAspectRatio("12345x61234", "12534x51234")).toEqual("2089:8539");
    });
});