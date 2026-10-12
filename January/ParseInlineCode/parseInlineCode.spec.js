const parseInlineCode = require('./parseInlineCode');

describe('Verify that the ` in the string is replaced with the appropriate code markdown.', () => {
    test('1. parseInlineCode("Use `let` to declare the variable.") should return "Use <code>let</code> to declare the variable.".', () => {
        expect(parseInlineCode("Use `let` to declare the variable.")).toEqual('Use <code>let</code> to declare the variable.');
    });
    test('2. parseInlineCode("Use `let` or `const` to declare a variable.") should return "Use <code>let</code> or <code>const</code> to declare a variable.".', () => {
        expect(parseInlineCode("Use `let` or `const` to declare a variable.")).toEqual('Use <code>let</code> or <code>const</code> to declare a variable.');
    });
    test('3. parseInlineCode("Run `npm install` then `npm start`.") should return "Run <code>npm install</code> then <code>npm start</code>.".', () => {
        expect(parseInlineCode("Run `npm install` then `npm start`.")).toEqual('Run <code>npm install</code> then <code>npm start</code>.');
    });
});