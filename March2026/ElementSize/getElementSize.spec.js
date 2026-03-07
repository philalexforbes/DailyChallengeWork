const getElementSize = require('./getElementSize');

describe('Given the display width and height along with the viewwidth and viewheight return the correct display area.', () => {
    test('1. getElementSize("1200 x 800", "50vw", "50vh") should return "600 x 400".', () => {
        expect(getElementSize("1200 x 800", "50vw", "50vh")).toEqual("600 x 400");
    });
    test('2. getElementSize("320 x 480", "25vw", "50vh") should return "80 x 240".', () => {
        expect(getElementSize("320 x 480", "25vw", "50vh")).toEqual("80 x 240");
    });
    test('3. getElementSize("1000 x 500", "7vw", "3vh") should return "70 x 15".', () => {
        expect(getElementSize("1000 x 500", "7vw", "3vh")).toEqual("70 x 15");
    });
    test('4. getElementSize("1920 x 1080", "95vw", "100vh") should return "1824 x 1080".', () => {
        expect(getElementSize("1920 x 1080", "95vw", "100vh")).toEqual("1824 x 1080");
    });
    test('5. getElementSize("1200 x 800", "0vw", "0vh") should return "0 x 0".', () => {
        expect(getElementSize("1200 x 800", "0vw", "0vh")).toEqual("0 x 0");
    });
    test('6. getElementSize("1440 x 900", "100vw", "114vh") should return "1440 x 1026".', () => {
        expect(getElementSize("1440 x 900", "100vw", "114vh")).toEqual("1440 x 1026");
    });
})