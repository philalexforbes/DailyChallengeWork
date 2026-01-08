const parseBlockquote = require('./parseBlockquote');

describe('Returned string has blockquotes added', () => {
    test('parseBlockquote("> This is a quote") should return "<blockquote>This is a quote</blockquote>".' , () => {
        expect(parseBlockquote('> This is a quote')).toEqual('<blockquote>This is a quote</blockquote>');
    });
    test('parseBlockquote(" > This is also a quote") should return "<blockquote>This is also a quote</blockquote>".' , () => {
        expect(parseBlockquote(' > This is also a quote')).toEqual('<blockquote>This is also a quote</blockquote>');
    });
    test('parseBlockquote("  >    So  Is  This") should return "<blockquote>So  Is  This</blockquote>".' , () => {
        expect(parseBlockquote('  >    So  Is  This')).toEqual('<blockquote>So  Is  This</blockquote>');
    });
})