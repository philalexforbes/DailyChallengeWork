const imageSearch = require('./imageSearch');

describe('Given an array of images and a search term return all images that match that term.', () => {
    test('1. imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog") should return ["dog.png"].', () => {
        expect(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"))
        .toEqual(["dog.png"]);
    });
    test('2. imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun") should return ["Sunset.jpg", "sunflower.jpeg"].', () => {
        expect(imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"))
        .toEqual(["Sunset.jpg", "sunflower.jpeg"]);
    });
    test('3. imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG") should return ["Moon.png", "stars.png"].', () => {
        expect(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"))
        .toEqual(["Moon.png", "stars.png"]);
    });
    test('4. imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat") should return ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"].', () => {
        expect(imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat"))
        .toEqual(["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]);
    });
});