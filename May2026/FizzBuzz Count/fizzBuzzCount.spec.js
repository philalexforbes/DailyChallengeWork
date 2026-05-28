const fizzBuzzCount = require('./fizzBuzzCount');

describe('Given a range return the number of fizz and buzz appearances in the range.', () => {
    test('1. fizzBuzzCount(1, 11) should return {fizz: 3, buzz: 2}.', () => {
        expect(fizzBuzzCount(1, 11)).toEqual({fizz: 3, buzz: 2});
    });
    test('2. fizzBuzzCount(14, 41) should return {fizz: 9, buzz: 6}.', () => {
        expect(fizzBuzzCount(14, 41)).toEqual({fizz: 9, buzz: 6});
    });
    test('3. fizzBuzzCount(24, 100) should return {fizz: 26, buzz: 16}.', () => {
        expect(fizzBuzzCount(24, 100)).toEqual({fizz: 26, buzz: 16});
    });
    test('4. fizzBuzzCount(-635, -14) should return {fizz: 207, buzz: 125}.', () => {
        expect(fizzBuzzCount(-635, -14)).toEqual({fizz: 207, buzz: 125});
    });
    test('5. fizzBuzzCount(-5432, 6789) should return {fizz: 4074, buzz: 2444}.', () => {
        expect(fizzBuzzCount(-5432, 6789)).toEqual({fizz: 4074, buzz: 2444});
    });
});