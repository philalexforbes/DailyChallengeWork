const decode = require('./decode');

describe('Given a string with () return the correct string.', () => {
    test('1. decode("(f(b(dc)e)a)") should return "abcdef".', () => {
        expect(decode("(f(b(dc)e)a)")).toEqual("abcdef");
    });
    test('2. decode("((is?)(a(t d)h)e(n y( uo)r)aC)") should return "Can you read this?".', () => {
        expect(decode("((is?)(a(t d)h)e(n y( uo)r)aC)")).toEqual("Can you read this?");
    });
    test('3. decode("f(Ce(re))o((e(aC)m)d)p") should return "freeCodeCamp".', () => {
        expect(decode("f(Ce(re))o((e(aC)m)d)p")).toEqual("freeCodeCamp");
    });
});