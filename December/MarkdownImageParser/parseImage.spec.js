const parseImage = require('./parseImage');

describe('Test that the inputted string returns the correct HTML', () => {
    test('1. parseImage("![Cute cat](cat.png)") should return \'<img src="cat.png" alt="Cute cat">\'.', ()=> {
        expect(parseImage("![Cute cat](cat.png)")).toEqual('<img src="cat.png" alt="Cute cat">');
    });
    test('2. parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)") should return \'<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">\'.', ()=> {
        expect(parseImage("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)")).toEqual('<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">');
    });
    test('3. parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)") should return \'<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">\'.', ()=> {
        expect(parseImage("![Cute cats!](https://freecodecamp.org/cats.jpeg)")).toEqual('<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">');
    });
})