const getDeepestBrackets = require('./getDeepestBrackets');

describe('Given a string return the deepest bit of text surrounded by brackets.', () => {
    test('1. getDeepestBrackets("(hello (world))") should return "world".', () => {
        expect(getDeepestBrackets("(hello (world))")).toEqual("world");
    });
    test('2. getDeepestBrackets("[outer [inner] outer]") should return "inner".', () => {
        expect(getDeepestBrackets("[outer [inner] outer]")).toEqual("inner");
    });
    test('3. getDeepestBrackets("{a{b}c{d{e}f}g}") should return "e".', () => {
        expect(getDeepestBrackets("{a{b}c{d{e}f}g}")).toEqual("e");
    });
    test('4. getDeepestBrackets("[the {quick (brown [fox] jumped) over (the) lazy} dog]") should return "fox".', () => {
        expect(getDeepestBrackets("[the {quick (brown [fox] jumped) over (the) lazy} dog]")).toEqual("fox");
    });
    test('5. getDeepestBrackets("f[(r)e{e}C{o[(d){e(C)}a]m}]p") should return "C".', () => {
        expect(getDeepestBrackets("f[(r)e{e}C{o[(d){e(C)}a]m}]p")).toEqual("C");
    });
})