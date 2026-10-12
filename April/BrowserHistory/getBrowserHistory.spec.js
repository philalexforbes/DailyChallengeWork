const getBrowserHistory = require('./getBrowserHistory');

describe('Given an array of urls and navigation methods return an array of pages and the index of pages visited.', () => {
    test('1. getBrowserHistory(["freecodecamp.org", "freecodecamp.org/learn", "Back"]) should return [["freecodecamp.org", "freecodecamp.org/learn"], 0].', () => {
        expect(getBrowserHistory(["freecodecamp.org", "freecodecamp.org/learn", "Back"])).toEqual([["freecodecamp.org", "freecodecamp.org/learn"], 0]);
    });
    test('2. getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog"]) should return [["example.com", "example.com/about", "example.com/contact", "example.com/blog"], 3].', () => {
        expect(getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog"]))
        .toEqual([["example.com", "example.com/about", "example.com/contact", "example.com/blog"], 3]);
    });
    test('3. getBrowserHistory(["example.com", "example.com/about", "Back", "example.com/contact",  "example.com/blog", "Back", "Back", "Forward"]) should return [["example.com", "example.com/contact", "example.com/blog"], 1].', () => {
        expect(getBrowserHistory(["example.com", "example.com/about", "Back", "example.com/contact",  "example.com/blog", "Back", "Back", "Forward"]))
        .toEqual([["example.com", "example.com/contact", "example.com/blog"], 1]);
    });
    test('4. getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog", "Back", "Back", "Forward", "freecodecamp.org"]) should return [["example.com", "example.com/about", "example.com/contact", "freecodecamp.org"], 3].', () => {
        expect(getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog", "Back", "Back", "Forward", "freecodecamp.org"]))
        .toEqual([["example.com", "example.com/about", "example.com/contact", "freecodecamp.org"], 3]);
    });
    test('5. getBrowserHistory(["example.com", "example.com/about", "Back", "Back"]) should return [["example.com", "example.com/about"], 0].', () => {
        expect(getBrowserHistory(["example.com", "example.com/about", "Back", "Back"]))
        .toEqual([["example.com", "example.com/about"], 0]);
    });
    test('6. getBrowserHistory(["example.com", "example.com/about", "Forward"]) should return [["example.com", "example.com/about"], 1].', () => {
        expect(getBrowserHistory(["example.com", "example.com/about", "Forward"]))
        .toEqual([["example.com", "example.com/about"], 1]);
    });
});