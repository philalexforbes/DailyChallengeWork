const stripTags = require('./stripTags');

describe('Given an html tag return the text between the tags.', () => {
    test('1. stripTags(\'<a href="#">Click here</a>\') should return "Click here".', () => {
        expect(stripTags('<a href="#">Click here</a>')).toEqual("Click here");
    });
    test('2. stripTags(\'<p class="center">Hello <b>World</b>!</p>\') should return "Hello World!".', () => {
        expect(stripTags('<p class="center">Hello <b>World</b>!</p>')).toEqual("Hello World!");
    });
    test('3. stripTags(\'<img src="cat.jpg" alt="Cat">\') should return an empty string ("").', () => {
        expect(stripTags('<img src="cat.jpg" alt="Cat">')).toEqual("");
    });
    test('4. stripTags(\'<main id="main"><section class="section">section</section><section class="section">section</section></main>\') should return sectionsection.', () => {
        expect(stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>')).toEqual("sectionsection");
    });
});