const parseUrlQuery = require('./parseUrlQuery');

describe('Given an api request url return the query parameters and values from that url.', () => {
    test('1. parseUrlQuery("https://example.com/search?name=Alice&age=30") should return {"name": "Alice", "age": "30"}', () => {
        expect(parseUrlQuery("https://example.com/search?name=Alice&age=30")).toEqual({"name": "Alice", "age": "30"});
    });
    test('2. parseUrlQuery("https://freecodecamp.org/learn?skill=programming&language=python") should return {"skill": "programming", "language": "python"}', () => {
        expect(parseUrlQuery("https://freecodecamp.org/learn?skill=programming&language=python")).toEqual({"skill": "programming", "language": "python"});
    });
    test('3. parseUrlQuery("https://freecodecamp.org/items?category=books&sort=asc&page=2") should return {"category": "books", "sort": "asc", "page": "2"}', () => {
        expect(parseUrlQuery("https://freecodecamp.org/items?category=books&sort=asc&page=2")).toEqual({"category": "books", "sort": "asc", "page": "2"});
    });
    test('4. parseUrlQuery("https://example.com?redirect=freecodecamp.org/learn&when=now") should return {"redirect": "freecodecamp.org/learn", "when": "now"}', () => {
        expect(parseUrlQuery("https://example.com?redirect=freecodecamp.org/learn&when=now")).toEqual({"redirect": "freecodecamp.org/learn", "when": "now"});
    });
});