const fizzBuzzMini = require('./fizzBuzzMini');

describe('Return the correct response for if the number is divisible by 3, 5, both, or neither', () => {
    test('1. fizzBuzzMini(3) should return "Fizz".', () => {
        expect(fizzBuzzMini(3)).toEqual('Fizz');
    });
    test('2. fizzBuzzMini(4) should return "4".', () => {
        expect(fizzBuzzMini(4)).toEqual('4');
    });
    test('3. fizzBuzzMini(35) should return "Buzz".', () => {
        expect(fizzBuzzMini(35)).toEqual('Buzz');
    });
    test('4. fizzBuzzMini(75) should return "FizzBuzz".', () => {
        expect(fizzBuzzMini(75)).toEqual('FizzBuzz');
    });
    test('5. fizzBuzzMini(98) should return "98".', () => {
        expect(fizzBuzzMini(98)).toEqual('98');
    });
})