const arrayDiff = require('./arrayDiff');

describe('Given two arrays return the difference between the arrays in a new array sorted.', () => {
    test('1. arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]) should return ["cherry"].', () => {
        expect(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]))
        .toEqual(["cherry"]);
    });
    test('2. arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]) should return ["cherry"].', () => {
        expect(arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]))
        .toEqual(["cherry"]);
    });
    test('3. arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) should return ["eight", "four", "six", "two"].', () => {
        expect(arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]))
        .toEqual(["eight", "four", "six", "two"]);
    });
    test('4. arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) should return ["five", "one", "seven", "three"].', () => {
        expect(arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]))
        .toEqual(["five", "one", "seven", "three"]);
    });
    test('5. arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) should return ["freeCodeCamp", "rocks"].', () => {
        expect(arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]))
        .toEqual(["freeCodeCamp", "rocks"]);
    });
});