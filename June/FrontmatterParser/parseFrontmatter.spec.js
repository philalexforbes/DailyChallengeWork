const parseFrontmatter = require('./parseFrontmatter');

describe('Given a string representing a frontmatter blck parse it and return the correct object.', () => {
    test('1. parseFrontmatter("---\ntitle: My Post\ndraft: false\nviews: 100\n---") should return { title: "My Post", draft: false, views: 100 }.', () => {
        expect(parseFrontmatter("---\ntitle: My Post\ndraft: false\nviews: 100\n---"))
        .toEqual({ title: "My Post", draft: false, views: 100 });
    });
    test('2. parseFrontmatter("---\nid: 6a174db57256a112f932195c\ntitle: My Book\nlocale: en\nwordCount: 10000\npublished: false\n---") should return { id: "6a174db57256a112f932195c", title: "My Book", locale: "en", wordCount: 10000, published: false }.', () => {
        expect(parseFrontmatter("---\nid: 6a174db57256a112f932195c\ntitle: My Book\nlocale: en\nwordCount: 10000\npublished: false\n---"))
        .toEqual({ id: "6a174db57256a112f932195c", title: "My Book", locale: "en", wordCount: 10000, published: false });
    });
    test('3. parseFrontmatter("---\nversion: 1.0.0\nurl: https://example.com\nprivate: true\n---") should return { version: "1.0.0", url: "https://example.com", private: true }.', () => {
        expect(parseFrontmatter("---\nversion: 1.0.0\nurl: https://example.com\nprivate: true\n---"))
        .toEqual({ version: "1.0.0", url: "https://example.com", private: true });
    });
    test('4. parseFrontmatter("---\nrating: 4.5\nprice: 9.99\n---") should return { rating: 4.5, price: 9.99 }.', () => {
        expect(parseFrontmatter("---\nrating: 4.5\nprice: 9.99\n---"))
        .toEqual({ rating: 4.5, price: 9.99 });
    });
});