const parseItalics = require('./parseItalics');

describe('Strings with proper notation should be returned with italic tags', () => {
    test('1. parseItalics("*This is italic*") should return "<i>This is italic</i>".', () => {
        expect(parseItalics("*This is italic*")).toEqual('<i>This is italic</i>');
    });
    test('2. parseItalics("_This is also italic_") should return "<i>This is also italic</i>".', () => {
        expect(parseItalics("_This is also italic_")).toEqual("<i>This is also italic</i>");
    });
    test('3. parseItalics("*This is not italic *") should return "*This is not italic *".', () => {
        expect(parseItalics("*This is not italic *")).toEqual("*This is not italic *");
    });
    test('4. parseItalics("_ This is also not italic_") should return "_ This is also not italic_".', () => {
        expect(parseItalics("_ This is also not italic_")).toEqual("_ This is also not italic_");
    });
    test('5. parseItalics("The *quick* brown fox _jumps_ over the *lazy* dog.") should return "The <i>quick</i> brown fox <i>jumps</i> over the <i>lazy</i> dog.".', () => {
        expect(parseItalics("The *quick* brown fox _jumps_ over the *lazy* dog.")).toEqual("The <i>quick</i> brown fox <i>jumps</i> over the <i>lazy</i> dog.");
    });
});