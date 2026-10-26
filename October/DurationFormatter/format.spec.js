const format = require('./format');

describe('Given a time in seconds return the formatted duration.', () => {
    test('1. format(500) should return "8:20".', () => {
        expect(format(500)).toEqual("8:20");
    });
    test('2. format(4000) should return "1:06:40".', () => {
        expect(format(4000)).toEqual("1:06:40");
    });
    test('3. format(1) should return "0:01".', () => {
        expect(format(1)).toEqual("0:01");
    });
    test('4. format(5555) should return "1:32:35".', () => {
        expect(format(5555)).toEqual("1:32:35");
    });
    test('5. format(99999) should return "27:46:39".', () => {
        expect(format(99999)).toEqual("27:46:39");
    });
});