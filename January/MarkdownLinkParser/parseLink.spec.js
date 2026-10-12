const parseLink = require('./parseLink');

describe('Verify the texted passed in returns the correct looking html link text', () => {
    test('1. parseLink("[freeCodeCamp](https://freecodecamp.org/)") should return \'<a href="https://freecodecamp.org/">freeCodeCamp</a>\'.', () => {
        expect(parseLink("[freeCodeCamp](https://freecodecamp.org/)")).toEqual('<a href="https://freecodecamp.org/">freeCodeCamp</a>');
    });
    test('2. parseLink("[Donate to our charity.](https://www.freecodecamp.org/donate/)") should return \'<a href="https://www.freecodecamp.org/donate/">Donate to our charity.</a>\'.', () => {
        expect(parseLink("[Donate to our charity.](https://www.freecodecamp.org/donate/)")).toEqual('<a href="https://www.freecodecamp.org/donate/">Donate to our charity.</a>');
    });
    test('3. parseLink("[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)") should return \'<a href="https://github.com/freeCodeCamp/freeCodeCamp/">Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.</a>\'.', () => {
        expect(parseLink("[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)")).toEqual('<a href="https://github.com/freeCodeCamp/freeCodeCamp/">Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.</a>');
    });
});