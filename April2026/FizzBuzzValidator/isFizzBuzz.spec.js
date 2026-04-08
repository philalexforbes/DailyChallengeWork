const isFizzBuzz = require('./isFizzBuzz');

describe('Return an array were multiples of 3 and 5 are replaced with Fizz, Buzz, FizzBuzz correctly with true or false', () => {
    test('1. isFizzBuzz([1, 2, "Fizz", 4, "Buzz"]) should return true.', () => {
        expect(isFizzBuzz([1, 2, "Fizz", 4, "Buzz"])).toEqual(true);
    });
    test('2. isFizzBuzz([13, 14, "FizzBuzz", 16, 17]) should return true.', () => {
        expect(isFizzBuzz([13, 14, "FizzBuzz", 16, 17])).toEqual(true);
    });
    test('3. isFizzBuzz([1, 2, "Fizz", 4, 5]) should return false.', () => {
        expect(isFizzBuzz([1, 2, "Fizz", 4, 5])).toEqual(false);
    });
    test('4. isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]) should return true.', () => {
        expect(isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"])).toEqual(true);
    });
    test('5. isFizzBuzz([1, 2, "Fizz", "Buzz", 5]) should return false.', () => {
        expect(isFizzBuzz([1, 2, "Fizz", "Buzz", 5])).toEqual(false);
    });
    test('6. isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103]) should return false.', () => {
        expect(isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103])).toEqual(false);
    });
    test('7. isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"]) should return true.', () => {
        expect(isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"])).toEqual(true);
    });
});